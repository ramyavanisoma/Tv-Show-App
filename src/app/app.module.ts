import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { StrangerThingsComponent } from './stranger-things/stranger-things.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    StrangerThingsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
