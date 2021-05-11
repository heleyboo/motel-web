import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptPipe } from '../excerpt.pipe';
import { DirectionPipe } from '../direction.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExcerptPipe,
    DirectionPipe
  ],
  exports: [ExcerptPipe, DirectionPipe]
})
export class CustomPipesModule { }
