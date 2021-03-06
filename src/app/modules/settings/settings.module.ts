import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings.routing.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NavbarModule
  ]
})
export class SettingsModule { }
