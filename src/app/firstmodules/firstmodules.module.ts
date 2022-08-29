import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { SecondModulesModule } from '../second-modules/second-modules.module';



@NgModule({
  declarations: [
    FirstcompComponent,
    SecondcompComponent
  ],
  imports: [
    CommonModule,
    SecondModulesModule
  ],
  exports: [FirstcompComponent,
    SecondModulesModule
  ],
})
export class FirstmodulesModule { }
