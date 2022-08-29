import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondmodulescompComponent } from './secondmodulescomp/secondmodulescomp.component';
// import { FirstcompComponent } from './firstcomp/firstcomp.component';



@NgModule({
  declarations: [
    // FirstcompComponent
  
    SecondmodulescompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SecondmodulescompComponent],
})
export class SecondModulesModule { }
