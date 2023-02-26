import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { NodesService } from './nodesService/nodes.service';
import { ChangerComponent } from './changer/changer.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'changer', component: ChangerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    HomeComponent,
    ChangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
