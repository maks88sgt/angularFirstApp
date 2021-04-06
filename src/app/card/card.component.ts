import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon;

  @Input() showWithPictures = true;
  catchedStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchCatchedStatus(): void {
    this.catchedStatus = !this.catchedStatus;
  }

  isBigDamage(): boolean {
    return (this.pokemon.damage >= 50);
  }

}
