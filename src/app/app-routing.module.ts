import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Test1Component } from './test1/test1.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:"testing",
    component: TestingComponent
  },
  // {
  //   path:"test1",
  //   component: Test1Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
