import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import { AddComponent } from './home/add/add.component';
import { DetailComponent } from './home/detail/detail.component';


const routes: Routes =[
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'add',component:AddComponent},
  { path:'edit/:id',component:AddComponent},
  { path:'detail/:id',component:DetailComponent}



];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
