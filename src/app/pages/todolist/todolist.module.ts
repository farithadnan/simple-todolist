import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TodolistRoutingModule
  ]
})
export class TodolistModule { }
