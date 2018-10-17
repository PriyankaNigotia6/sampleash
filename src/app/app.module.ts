import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';
import { SampleDirective } from './directive/sample/sample.directive';
import { AdvanceSampleDirective } from './directive/advance-sample/advance-sample.directive';
import { OwnIfDirective } from './directive/own-if/own-if.directive';
import { ServicesCheckComponent } from './services-check/services-check.component';
import { AppServices } from './services/app.services';
import { CheckServices } from './services/service-check.services';

//Routes
import { appRoutes } from './routes/app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleTwoSubComponent } from './sample-two/sample-two-sub/sample-two-sub.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleOneComponent,
    SampleTwoComponent,
    SampleDirective,
    AdvanceSampleDirective,
    OwnIfDirective,
    ServicesCheckComponent,
    DashboardComponent,
    SampleTwoSubComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppServices, CheckServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
