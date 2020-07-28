import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarComponent } from './components/editar/editar.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    EditarComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule, AppRoutingModule,
     HttpClientModule, FormsModule, NgbModule,
    ReactiveFormsModule,NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
