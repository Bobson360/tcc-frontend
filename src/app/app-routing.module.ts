import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AboutComponent } from './about/about.component'
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'nav', component: NavigationComponent},
  {path: 'form', component: FormComponent},
  {path: '', component: AboutComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
