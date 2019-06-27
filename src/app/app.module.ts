import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueBoxComponent } from './blue-box/blue-box.component';
import { TableComponent } from './table/table.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Table2Component } from './table2/table2.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { Screen3Component } from './screen3/screen3.component';
import { Table3Component } from './table3/table3.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlueBox2Component } from './blue-box2/blue-box2.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueBoxComponent,
    TableComponent,
    Screen1Component,
    Screen2Component,
    Table2Component,
    CheckboxesComponent,
    Screen3Component,
    Table3Component,
    NavbarComponent,
    BlueBox2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
