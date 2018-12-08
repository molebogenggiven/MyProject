import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {Response} from '@angular/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  signUpForm: FormGroup;
  customerData: any;
  constructor(private sendServiceToSpring: GetServiceFromSpring) { }

  ngOnInit() {
    this.sendServiceToSpring.getCustomerById('molebogeng.kubyana@gmail.com').
    subscribe(
      (response: Response) => {
        this.customerData = response.json(),
          console.log(response);
      },
      (error) => console.log(error)
    );
  }
  onSubmit () {}

}
