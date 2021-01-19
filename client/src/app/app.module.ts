import { TokenInterceptor } from './controllers/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SorterTableComponent } from './sorter-table/sorter-table.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {SorterTableModule} from './sorter-table/sorter-table.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SorterTableComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    SorterTableModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  entryComponents: [SorterTableModule],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }, 
  { provide: HTTP_INTERCEPTORS,
   multi: true,
  useClass: TokenInterceptor}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
