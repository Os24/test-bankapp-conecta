import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-bankapp-conecta';
  accounts:Object;
  saldos:Object;
  tarjetas:Object;
  constructor(private service:HttpService){}
  ngOnInit(){
    this.service.getData()
    .subscribe(response=>{
      this.accounts = response;
     
    })
    this.service.getSecondData()
    .subscribe(response=>{
      this.saldos = response
      })
    this.service.getTarjetasData()
    .subscribe(response=>{
      this.tarjetas = response
    })
  }
}
