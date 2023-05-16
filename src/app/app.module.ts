import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule,Routes } from "@angular/router";
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { RegisterUserComponentComponent } from './components/register-user-component/register-user-component.component';
const appRoutes:Routes=[
  {path: '', component: LoginComponentComponent},
  {path: 'formModelo', component: FormComponentComponent},
  {path: 'home', component: HomeComponentComponent},
  {path: 'register', component: RegisterUserComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponentComponent,
    FormComponentComponent,
    HomeComponentComponent,
    FooterComponent,
    ModalComponent,
    RegisterUserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
