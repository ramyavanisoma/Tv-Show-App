import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { StrangerThingsComponent } from './stranger-things/stranger-things.component';
<<<<<<< HEAD
import { DisplayComponentComponent } from './display-component/display-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar' 
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list'; 
=======
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

>>>>>>> 79e16871e32d7f29f6b32af05f5371e2b1d0becf
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
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
=======
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
>>>>>>> 79e16871e32d7f29f6b32af05f5371e2b1d0becf
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
