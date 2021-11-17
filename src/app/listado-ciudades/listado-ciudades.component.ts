import { Component, OnInit } from '@angular/core';

import { OpenweatherService } from '../services/openweather.service';



@Component({

  selector: 'app-listado-ciudades',

  templateUrl: './listado-ciudades.component.html',

  styleUrls: ['./listado-ciudades.component.css']

})

export class ListadoCiudadesComponent implements OnInit {

  ciudades = ["Alicante", "Madrid", "Santa Pola", "París", "Fuentealbilla", "Antártida"];

  tiempos: any[] = [];

  intervalo = 2000;

  carrusel = true;

  tarjetas = true;

  otraCiudad = "";



  constructor(private backend: OpenweatherService) { }



  ngOnInit(): void {

    this.ciudades.forEach((ciudad, i) => {

      this.backend.getTiempo(ciudad).subscribe(tiempo => {

        this.tiempos[i] = tiempo;

        console.log(this.tiempos);

      });

    });

  }



  nuevaCiudad() {

    this.backend.getTiempo(this.otraCiudad).subscribe(tiempo => {

      this.tiempos.push(tiempo);

      console.log(this.tiempos);

    });

  }

}

