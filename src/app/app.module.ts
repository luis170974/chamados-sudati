import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './auth/login/login.component';
import { DepartamentoComponent } from './departamentos/departamento.component';

import ptBr from '@angular/common/locales/pt';
import { environment } from './environments/environment.prod';
import { AuthenticationService } from './auth/services/authentication.service';
import { registerLocaleData } from '@angular/common';

import { IConfig, NgxMaskModule } from 'ngx-mask';


registerLocaleData(ptBr);

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    NgxMaskModule.forRoot(maskConfig)

  ],
  providers: [
    AuthenticationService,
    { provide: LOCALE_ID, useValue: "pt" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
