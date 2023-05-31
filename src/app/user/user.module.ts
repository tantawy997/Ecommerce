import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './User-Routing.Module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,UserRoutingModule
  ],
  exports:[RouterModule]
})
export class UserModule { }
