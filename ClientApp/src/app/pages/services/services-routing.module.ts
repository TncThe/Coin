import { WalletPlatformComponent } from './components/custody/walletPlatform/walletPlatform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualifiedCustodyComponent } from './components/custody/qualifiedCustody/qualifiedCustody.component';
import { SelfManagedComponent } from './components/custody/selfManaged/selfManaged.component';
import { PrimeTradingComponent } from './components/primeServices/primeTrading/primeTrading.component';
import { PrimeLendingComponent } from './components/primeServices/primeLending/primeLending.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'custody/qualified-custody',
        component : QualifiedCustodyComponent
      },
      {
        path: 'custody/wallet-platform',
        component : WalletPlatformComponent
      },
      {
        path: 'custody/self-managed-custody',
        component : SelfManagedComponent
      },
      {
        path: 'prime/prime-trading',
        component : PrimeTradingComponent
      }
      ,
      {
        path: 'prime/prime-lending',
        component : PrimeLendingComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule { }
