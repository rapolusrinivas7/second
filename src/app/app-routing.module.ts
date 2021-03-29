import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'navbar', component: NavbarComponent },
  { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/register', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
