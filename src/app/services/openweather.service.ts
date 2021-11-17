import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  constructor(private http:HttpClient) { }

  getTiempo(ciudad:string) {

    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=36716e91288f48d1fb0d996c17c7ce73&units=metric&lang=es")

  }
}
