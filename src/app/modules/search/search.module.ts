import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RcommonModule } from 'src/app/shared/modules/rcommon/rcommon.module';

@NgModule({
  imports: [
    CommonModule,
    RcommonModule
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class SearchModule { }
