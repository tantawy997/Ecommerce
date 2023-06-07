import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_Model/user';
import { Injectable,NgZone } from '@angular/core';
import { BehaviorSubject, Observable, catchError, first,map,observable, tap } from 'rxjs';
import { ErrorHanldeService } from './error-hanlde.service';
import {   } from '@angular/core';
import {GoogleAuthProvider} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // canActivate(arg0: any, id: any): boolean | import("@angular/router")
  // .UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
  //   throw new Error('Method not implemented.');
  // }

//private userSubject: BehaviorSubject<User | null>;
public user: any;
//IsUserLoggedIn = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('user')!));


  constructor(public http:HttpClient,public ErrorService:ErrorHanldeService,public router:Router,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone // NgZone service to remove outside scope warning)
    ,private Toaster:ToastrService
  )
  {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });


  }

  SignInWithGoogle(){
    return this.AuthLogin(new GoogleAuthProvider()).then((res) => {
      console.log(res);
      this.router.navigateByUrl('products');

    });
  }



 public LoginUser(email: string, password: string)
  {
    console.log("inside login")

   return this.afAuth.signInWithEmailAndPassword(email,password).then((res)=>{
    this.SetUserData(res.user);
    this.afAuth.authState.subscribe((userLoging)=>{
      if(userLoging){
        this.router.navigate(["products"]);
        this.Toaster.success("well done your are logged in")
      }
    })

  }).catch((error)=> {
    this.Toaster.error(error.message);
  })
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('auth/login');
    });
}

  Register(email:string, password:string){

    return this.afAuth.createUserWithEmailAndPassword(email,password).then((res)=>{
      this.SendVerificationMail();
      this.SetUserData(res.user);
      this.router.navigateByUrl("auth/login");
    }).catch((error)=>{
      this.Toaster.error(error.message);
    })

    }


  GetUserById(id:number){
   return this.http.get<User>(environment.BaseUrl+"users/"+id);
  }

  GetAllUsers(){
    return this.http.get<User[]>(environment.BaseUrl+"users");
  }


  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigateByUrl('auth/verify-email-address');
      });
  }


  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.Toaster.info('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        this.Toaster.error(error.message);
      })}

      get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null && user.emailVerified !== false ? true : false;
      }

      AuthLogin(provider: any) {
        return this.afAuth
          .signInWithPopup(provider)
          .then((result) => {
            this.router.navigate(['products']);
            this.SetUserData(result.user);
            this.Toaster.success("well done")
          })
          .catch((error) => {
            this.Toaster.error(error.message);
          });
      }

      SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
          `users/${user.uid}`
        );
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
          merge: true,
        });
      }


      /*
      referance for how I used firebase
      https://www.positronx.io/full-angular-firebase-authentication-system/
      */

}
