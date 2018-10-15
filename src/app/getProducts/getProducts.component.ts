import {Component, OnInit, ViewChild} from '@angular/core';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {FormGroup, NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {log} from 'util';

@Component( {
  selector: 'app-get-all-products',
  templateUrl: './getProducts.component.html',
  // styleUrls: ['./getProducts.components.css']
})
export class GetProductsComponent implements OnInit {
  products: any[];
  settings = {
    columns: {
      productId: {
        title: 'ProductId'
      },
      productPrice: {
        title: 'ProductPrice'
      }
    ,
    productName: {
      title: 'ProductName'
    },
    productQuantity: {
      title: 'ProductQuantity'
    },
    productSize: {
      title: 'ProductSize'
    }
  },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a">Delete</i>',
      confirmDelete: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit">Edit</i>',
      saveButtonContent: '<i class="ion-checkmark">Save</i>',
      cancelButtonContent: '<i class="ion-close">Cancel</i>',
    }
  };
  constructor(private userService: GetServiceFromSpring) { }

  ngOnInit() {
    this.userService.getAllProducts()
      .subscribe(
        (response: Response) => {
          this.products = response.json();
          console.log(this.products);
        },
        (error) => console.log(error)
      );
  }


  onCreateConfirm(event): void {

  }

  onSaveConfirm(event): void {
  }

  onDeleteConfirm(event): void {
    console.log(event.target);
   // const target = event.source.selected._element.nativeElement;
   // console.log(target);
   // const selectE1 = event.target;
   // const  val = selectE1.options[selectE1.selectedIndex].dataset.somedata;
  //  console.log(val);
   console.log() ;

  }

}
