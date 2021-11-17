import { Component, OnInit, Input } from '@angular/core';



@Component({

  selector: 'app-ciudad',

  templateUrl: './ciudad.component.html',

  styleUrls: ['./ciudad.component.css']

})

export class CiudadComponent implements OnInit {



  @Input() tiempo: any;



  constructor() { }



  ngOnInit(): void {

  }



}








