import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MotelRoomModule } from './modules/motel-room/motel-room.module';
import { UserModule } from './modules/user/user.module';
import { FlashMessageModule } from './modules/flash-message/flash-message.module';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { SearchModule } from './modules/search/search.module';
import { ExcerptPipe } from './shared/pipes/excerpt.pipe';
import { CustomPipesModule } from './shared/pipes/custom-pipes/custom-pipes.module';
import {registerLocaleData} from '@angular/common';
import localVi from '@angular/common/locales/vi';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: environment.keycloak,
      bearerExcludedUrls: ['/assets', '/clients/public'],
      initOptions: {
        flow: 'implicit',
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}


registerLocaleData(localVi, 'vi-VN')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
    MotelRoomModule,
    UserModule,
    HomeModule,
    SearchModule,
    FlashMessageModule.forRoot(),
    CustomPipesModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
