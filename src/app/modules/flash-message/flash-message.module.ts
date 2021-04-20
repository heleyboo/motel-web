import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashMessageComponent } from './flash-message.component';
import { FlashMessagesService } from './flash-messages.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlashMessageComponent],
  exports: [FlashMessageComponent],
  providers: []
})
export class FlashMessageModule {
  // static forRoot(): ModuleWithProviders {
  //     return {
  //         ngModule: FlashMessageModule,
  //         providers: [FlashMessagesService]
  //     }
  // }

  static forRoot(): ModuleWithProviders<FlashMessageModule> {
    return {
      ngModule: FlashMessageModule,
      providers: []
    };
  }
}
