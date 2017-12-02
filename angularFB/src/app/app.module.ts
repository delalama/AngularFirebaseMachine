import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExplanationContainerComponent } from './explanation-container/explanation-container.component';
import { MatButtonModule } from '@angular/material/button';
import { DemoFbComponent } from './demo-fb/demo-fb.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {FBaseService} from './FireService.service';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExplanationContainerComponent,
    DemoFbComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [FBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
