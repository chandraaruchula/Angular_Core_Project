import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderwatchComponent } from './add-orderwatch/add-orderwatch.component';
import { ListOrderWatchComponent } from './list-order-watch/list-order-watch.component';
import { UpdateOrderwatchComponent } from './update-orderwatch/update-orderwatch.component';

const routes: Routes = [

{ path: 'orderwatch', component: ListOrderWatchComponent },
 { path: 'create-orderwatch', component: AddOrderwatchComponent },
 {path:'update-orderwatch/:id', component:UpdateOrderwatchComponent},
 { path: '', redirectTo: 'orderwatch', pathMatch: 'full' },];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
