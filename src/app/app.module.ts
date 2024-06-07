import { AppRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomeComponent } from './components/home/home.component';
import { ComplaintsModule } from './components/complaints/complaints.module';
import { UtilsModule } from './utils/utils.module';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule, AuthModule, ComplaintsModule, AppRoutingModule,
    HttpClientModule,UtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
