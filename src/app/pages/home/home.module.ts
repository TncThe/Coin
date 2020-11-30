
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { TranslateModule } from '@ngx-translate/core';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    InlineSVGModule,
    CommonModule,
    TranslateModule,
    GeneralModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
