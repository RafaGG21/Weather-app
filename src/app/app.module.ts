import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';

import { ListadoCiudadesComponent } from './listado-ciudades/listado-ciudades.component';



import { HttpClientModule } from '@angular/common/http';

import { FiltroMayusculaPipe } from './pipes/filtro-mayuscula.pipe';

import { CiudadComponent } from './ciudad/ciudad.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';



@NgModule({

  declarations: [

    AppComponent,

    ListadoCiudadesComponent,

    FiltroMayusculaPipe,

    CiudadComponent

  ],

  imports: [

    BrowserModule,

    HttpClientModule,

    FormsModule,

    NgbModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }








