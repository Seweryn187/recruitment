import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', component: StartComponent, title: 'Produkty' },
  { path: ':category/szczegóły', component: InfoComponent, title: 'Szczegóły produktu' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
