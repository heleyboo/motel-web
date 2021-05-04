import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptPipe } from '../excerpt.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExcerptPipe],
  exports: [ExcerptPipe]
})
export class CustomPipesModule { }
