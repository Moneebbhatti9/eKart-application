import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './main/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroModule } from './components/hero/hero.module';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [BrowserModule, AppRoutingModule, HeroModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
