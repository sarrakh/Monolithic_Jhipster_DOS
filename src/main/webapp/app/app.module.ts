import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MonoAppSoaSharedModule } from 'app/shared/shared.module';
import { MonoAppSoaCoreModule } from 'app/core/core.module';
import { MonoAppSoaAppRoutingModule } from './app-routing.module';
import { MonoAppSoaHomeModule } from './home/home.module';
import { MonoAppSoaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MonoAppSoaSharedModule,
    MonoAppSoaCoreModule,
    MonoAppSoaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MonoAppSoaEntityModule,
    MonoAppSoaAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MonoAppSoaAppModule {}
