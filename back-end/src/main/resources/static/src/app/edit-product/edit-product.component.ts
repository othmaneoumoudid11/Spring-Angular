import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public currentProduct:Product;
  public url: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute,private catService:CatalogueService) { }

  ngOnInit(): void {
     this.url = atob(this.activatedRoute.snapshot.params.id);
    this.catService.getResource(this.url)
        .subscribe(data=>{
          this.currentProduct=data;
        },err=>{
            console.log(err);
        })
  }

  onUpdateProduct(value: any){
        this.catService.updateResource(this.url,value)
              .subscribe(data=>{
                alert("Mise a jour effectuee avec succes");
                this.router.navigateByUrl("/products");
              },err=>{
                console.log(err);
              })
  }

}
