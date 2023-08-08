import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TilesSubcategories } from '../tile/subcategories';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartComponent implements OnInit {
  public tilesSubcategories: typeof TilesSubcategories = TilesSubcategories;

  constructor(private cdf: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.cdf.detectChanges();
  }
}
