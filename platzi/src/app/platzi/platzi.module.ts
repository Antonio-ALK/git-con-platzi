import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatziAppComponent } from './platzi-app/platzi-app.component';



@NgModule({
  declarations: [
    PlatziAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlatziAppComponent
  ]
  
})
export class PlatziModule { }
