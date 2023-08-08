import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AntDesignModule } from '../ant-design.module';
import { TileComponent } from './components/tile/tile.component';
import { UserDetailsModalComponent } from './components/user-details-modal/user-details-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StartComponent, InfoComponent, TileComponent, UserDetailsModalComponent],
  imports: [CommonModule, ProductsRoutingModule, AntDesignModule, FormsModule, ReactiveFormsModule],
})
export class ProductsModule {}
