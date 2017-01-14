import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {AppComponent} from './app.component'

import {HeroService} from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: `heroes`,
        component: HeroesComponent
      },
      {
        path: `dashboard`,
        component: DashboardComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
