import { Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { SampleOneComponent } from "../sample-one/sample-one.component";
import { SampleTwoComponent } from "../sample-two/sample-two.component";
import { ServicesCheckComponent } from "../services-check/services-check.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SampleTwoSubComponent } from "../sample-two/sample-two-sub/sample-two-sub.component";


export const appRoutes: Routes = [
    { path: '', component: DashboardComponent },    
    { path: 'sample-one', component: SampleOneComponent },
    { path: 'sample-one', component: SampleOneComponent },
    // { path: 'sample-two', component: SampleTwoComponent },
    { path: 'sample-two', component: SampleTwoComponent, children:[
        {path: ':id/:firstname/:lastname/:email', component: SampleTwoSubComponent
    }]
},
    { path: 'check-services', component: ServicesCheckComponent }
];