import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './standalones/page-not-found/page-not-found.component';

// I wrote the path in Polish because the application itself is in Polish
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/produkty' },
  { path: 'produkty', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), title: 'Produkty' },
  { path: '**', component: PageNotFoundComponent, title: 'Strona nie została znaleziona' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
