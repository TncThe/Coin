import { QualifiedCustodyComponent } from './components/custody/qualifiedCustody/qualifiedCustody.component';
import { WalletPlatformComponent } from './components/custody/walletPlatform/walletPlatform.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { TranslateModule } from '@ngx-translate/core';
import { SelfManagedComponent } from './components/custody/selfManaged/selfManaged.component';
import { ServicesRoutingModule } from './services-routing.module';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';

@NgModule({
  declarations:[
    SelfManagedComponent,
    WalletPlatformComponent,
    QualifiedCustodyComponent,
  ],
  imports: [
    InlineSVGModule,
    CommonModule,
    TranslateModule,
    ServicesRoutingModule,
    GeneralModule
  ],
})
export class ServicesModule {}
