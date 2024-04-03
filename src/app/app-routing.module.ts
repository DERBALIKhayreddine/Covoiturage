import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashbordComponent } from './pages/admin-dashbord/admin-dashbord.component';
import { UserDashbordComponent } from './pages/user-dashbord/user-dashbord.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './pages/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { RechercheAvanceeComponent } from './recherche-avancee/recherche-avancee.component';

const routes: Routes = [
  {
    path:'features',  //le nom du path
    component:FeatureComponent   //le composant
  },

  {
    path:'hero',  //le nom du path
    component:HeroComponent   //le composant
  },
  {
    path:'header',  //le nom du path
    component:HeaderComponent   //le composant
  },
  {
    path:'about',  //le nom du path
    component:AboutComponent   //le composant
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admindashboard',
    component:AdminDashbordComponent,canActivate :[AuthGuard]
  },
  {
    path:'userdashbord',
    component:UserDashbordComponent,canActivate :[AuthGuard]
  },
  {
    path:'rechercheAvancee',
    component:RechercheAvanceeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
