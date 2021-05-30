import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { ComponentsComponent } from './group/components/components.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ComponentsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
