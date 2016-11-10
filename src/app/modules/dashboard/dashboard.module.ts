import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

// Routing
import { DashboardRouter } from './dashboard.routing';

@NgModule({
    imports: [
        DashboardRouter
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [

    ]
})

export class DashboardModule {}