import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/cuenta')
  }

  getSecondData(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/saldos')

  }
  getTarjetasData(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/tarjetas')

  }

  getMovData(){
    return this.http.get('http://bankapp.endcom.mx/api/bankappTest/movimientos')

  }
}
