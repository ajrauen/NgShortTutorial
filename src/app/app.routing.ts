import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'login', redirectTo: 'login'}
]

export const AppRoutingModule = RouterModule.forRoot(routes)