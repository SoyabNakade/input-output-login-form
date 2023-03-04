import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OutputDataComponent } from './output-data/output-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionServiceModule } from 'ng-connection-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OutputDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConnectionServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
