import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { StrangerThingsComponent } from './stranger-things/stranger-things.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar' 
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list'; 
@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    StrangerThingsComponent,
    DisplayComponentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
