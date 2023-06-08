import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { AlertComponent } from './alert/alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    DropDownListComponent,
    SpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    
  ],
  exports:[HeaderComponent,RouterModule,DropDownListComponent,SpinnerComponent]
})
export class SharedModule { }
