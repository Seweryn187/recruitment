import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TilesSubcategories } from './subcategories';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  @Input() public tileDescription: string = '';
  @Input() public imgSrc: string = '';
  @Input() public imgAlt: string = '';
  @Input() public filterValue: string = 'invert(100%)';
  @Input() public category: string = '';

  public tilesSubcategories: typeof TilesSubcategories = TilesSubcategories;
}
