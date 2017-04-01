import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';

import { LogrosService } from './services/logros.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe,
    LogroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ LogrosService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }