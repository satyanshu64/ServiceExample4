import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParallelComponent } from './components/parallel/parallel.component';
import { HelloService } from './services/hello.service';
import { CustomersService } from './services/customers.service';

@NgModule({
  declarations: [
    AppComponent,
    ParallelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelloService,CustomersService],
  bootstrap: [ParallelComponent]
})
export class AppModule { }
