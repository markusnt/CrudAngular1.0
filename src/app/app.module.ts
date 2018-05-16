
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaService } from './lista/lista.service';
import { Option } from './models/option';
import { EndComponent } from './end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    HomeComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
