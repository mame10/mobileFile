import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionPageRoutingModule } from './connexion-routing.module';

import { ConnexionPage } from './connexion.page';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../shared/services/token.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule
   
  ],
  declarations: [ConnexionPage],
  providers:[TokenService]
})
export class ConnexionPageModule {}
