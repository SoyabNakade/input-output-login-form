import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OutputDataComponent } from './output-data/output-data.component';

const routes: Routes = [
  {path:"",component:LoginComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"output-data",component:OutputDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
