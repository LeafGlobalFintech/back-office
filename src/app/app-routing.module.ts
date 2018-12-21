import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';


export const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      { path: '', redirectTo: 'users',  pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
  providers: [
  ],
  declarations: []
})

export class RoutingModule { };
