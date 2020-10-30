import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://api.sheety.co/3e4c7f1e1c4feddcd7a8feccc25b264d/bankappTest/cuenta')
  }

  getSecondData(){
    return this.http.get(' https://api.sheety.co/3e4c7f1e1c4feddcd7a8feccc25b264d/bankappTest/saldos')

  }
  getTarjetasData(){
    return this.http.get(' https://api.sheety.co/3e4c7f1e1c4feddcd7a8feccc25b264d/bankappTest/tarjetas')

  }
}
