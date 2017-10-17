import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SummeryComponent } from './summery/summery.component';

//Services
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SummeryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
