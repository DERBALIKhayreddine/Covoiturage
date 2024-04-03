import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AngularMaterialModules } from './AngularMaterialModules';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AdminDashbordComponent } from './pages/admin-dashbord/admin-dashbord.component';
import { UserDashbordComponent } from './pages/user-dashbord/user-dashbord.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { RidedialogComponent } from './ridedialog/ridedialog.component';
import { RechercheAvanceeComponent } from './recherche-avancee/recherche-avancee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    AdminDashbordComponent,
    UserDashbordComponent,
    FooterComponent,
    AboutComponent,
    HeroComponent,
    FeatureComponent,
    RidedialogComponent,
    RechercheAvanceeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
