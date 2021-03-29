import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { QuizService } from './shared/quiz.service';
import { AuthGuard } from './auth.guard';
import { BackgroundDirective } from './background.directive'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
