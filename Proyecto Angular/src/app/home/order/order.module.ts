import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';


@NgModule({
  declarations: [CreateOrdersComponent, EditOrdersComponent, ListOrdersComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
