import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages:Number ;
  public pages:Array<number> ;
  public r:number = 0;
  public currentKeyword: string ="";
  public url: any;

  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetProducts(){
    this.catService.getProducts(this.currentPage,this.size)
     .subscribe(data=>{
       this.r = this.totalPages=data["page"].totalPages;
       //this.pages= new Array<number>(this.totalPages);
       this.pages= new Array<number>(this.r);
       this.produits=data;
     },err=>{
       console.log(err);
     })
  }

  onPageProduct(i){
    this.currentPage=i;
    this.chercherProduits();
  }

  onChercher(form: any){
    this.currentPage=0;
    this.currentKeyword= form.keyword;
    this.chercherProduits();
  }


  chercherProduits(){
   
    this.catService.getProductsByKeyword(this.currentKeyword,this.currentPage,this.size)
     .subscribe(data=>{
       this.r = this.totalPages=data["page"].totalPages;
      //this.pages= new Array<number>(this.totalPages);
       this.pages= new Array<number>(this.r);
       this.produits=data;
     },err=>{
       console.log(err);
     })
  }

  onDeleteProduct(p){
    let conf=confirm("Etes vous sure?");
    if(conf)
        this.catService.deleteResource(p._links.self.href)
           .subscribe(data=>{
             this.chercherProduits();
           },err=>{
             console.log(err);
           })
  }

  onEditProduct(p){
    this.url=p._links.self.href;
    this.router.navigateByUrl("/edit-product/"+btoa(this.url));
  }

}
