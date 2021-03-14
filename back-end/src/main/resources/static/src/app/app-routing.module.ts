import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {
    path:"Products",
    component:ProduitsComponent
  },
  {
    path:"new-Product",
    component:NewProductComponent
  },
  {
    path:"", redirectTo:"/Products",pathMatch:'full'
  },
  {
    path:"edit-product/:id", component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
