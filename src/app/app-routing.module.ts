import { NgModule, Component, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaComponent},
  { path: 'end', component: EndComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
