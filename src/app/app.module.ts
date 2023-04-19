import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NumberService } from './number.service';
import { StmtModifier } from '@angular/compiler';
import { StringService } from './string.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumberService,StringService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
