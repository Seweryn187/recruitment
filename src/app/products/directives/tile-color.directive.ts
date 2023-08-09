import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TilesSubcategories } from '../components/tile/subcategories';

@Directive({
  selector: '[appTileColor]',
})
export class TileColorDirective implements OnInit {
  @Input()
  public appTileColorCategory!: string;

  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    switch (this.appTileColorCategory) {
      case TilesSubcategories.WODA:
        this.elementRef.nativeElement.style.backgroundColor = '#00acba';
        break;
      case TilesSubcategories.POWIETRZE:
        this.elementRef.nativeElement.style.backgroundColor = '#ec901b';
        break;
      case TilesSubcategories.BIZNES:
        this.elementRef.nativeElement.style.backgroundColor = '#464655';
        break;
      case TilesSubcategories.INNE:
        this.elementRef.nativeElement.style.backgroundColor = '#97ad4f';
        this.elementRef.nativeElement.style.color = '#fff';
        break;
    }
  }

}
