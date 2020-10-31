import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog'
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newcomponent = "Entered in new component created";
  form: FormGroup;
  constructor(private dialogRef : MatDialogRef<FormComponent>,private formBuilder:FormBuilder) {
    this.buildForm()
   }



  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
   
      cardNumberField :[''],
      accountField :[''],
      issuerField :[''],
      cardNameField :[''],
      brandField :[''],
      statusField :[''],
      balanceField :[''],
      accTypeField :[''],
    });
  }

  get cardNumberField() {
    console.log(this.form.get('cardNumberField'))
    return this.form.get('cardNumberField');
    
  }

  get accountField() {
    return this.form.get('accountField');
  }

  save() {
    if (this.form.valid) {
      console.log("yeii")
    } else {
      console.log("nou :(")
    }
  }



  closeModal() {
    this.dialogRef.close();
  }

}
