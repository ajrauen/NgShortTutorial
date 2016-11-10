import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

// Routing
import { LoginRouter } from './login.routing';

// Services

import { LoginService } from './services/login.service';

@NgModule({
    imports: [
        LoginRouter
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})

export class LoginModule {}