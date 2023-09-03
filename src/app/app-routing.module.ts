import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsViewComponent } from './details-view/details-view.component'; // Import your details view component

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'app-details-view', component: DetailsViewComponent },
  // Add other routes as needed
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to the login page by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
