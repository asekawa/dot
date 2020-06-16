import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternListComponent } from './intern-list/intern-list.component';



const routes: Routes = [
  {path:'intern-list',component:InternListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

