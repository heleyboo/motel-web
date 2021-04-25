import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { RcommonModule } from 'src/app/shared/modules/rcommon/rcommon.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RcommonModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
