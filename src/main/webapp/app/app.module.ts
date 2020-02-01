import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AssaneSharedModule } from 'app/shared/shared.module';
import { AssaneCoreModule } from 'app/core/core.module';
import { AssaneAppRoutingModule } from './app-routing.module';
import { AssaneHomeModule } from './home/home.module';
import { AssaneEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AssaneSharedModule,
    AssaneCoreModule,
    AssaneHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AssaneEntityModule,
    AssaneAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class AssaneAppModule {}
