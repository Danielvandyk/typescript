import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesDB = [

    {
      title: 'The punisher',
      description: 'El ex-militar Frank es traicionado por el bando ',
      btnText:'ver',
      image: 'https://blog.tribugame.es/wp-content/uploads/2019/01/The-Punisher-temporada-2-1-1024x556.jpg' ,
      btnColor: 'bg-primary-gradient',
      type: 'serie',   
    
    },

    {
      title: 'The punisher',
      description: 'El ex-militar Frank es traicionado por el bando ',
      btnText:'ver',
      image: 'https://blog.tribugame.es/wp-content/uploads/2019/01/The-Punisher-temporada-2-1-1024x556.jpg' ,
      btnColor: 'warning',
      type: 'serie',   
    
    },






  ];
  constructor() { }

  ngOnInit(): void {
  }

}
