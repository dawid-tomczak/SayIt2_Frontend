import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    UserPageComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class UserModule { }
