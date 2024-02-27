import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HeroComponent, DropdownsComponent, SliderComponent],
  imports: [CommonModule],
  exports: [HeroComponent],
})
export class HeroModule {}
