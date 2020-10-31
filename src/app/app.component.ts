import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
})
export class AppComponent implements OnInit {
  title = 'test-bankapp-conecta';
  accounts:Object;
  saldos:Object;
  creditCard:Object;
  cantidad:number;
  movements:Object;
  constructor(private service:HttpService,public matDialog:MatDialog){}
  clickEvent(){
    console.log("ill be back")
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(FormComponent, dialogConfig);
  }
  ngOnInit(){
    this.cantidad = 0
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
      this.creditCard = response
      console.log(this.creditCard)
    })
    this.service.getMovData()
    .subscribe(response=>{
      this.movements = response
      console.log(this.movements)
    })
  }
  
}
