import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { createPhaserGame } from 'game-core';

@Component({
  selector: 'app-city-block',
  templateUrl: './city-block.component.html',
  styleUrls: ['./city-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    createPhaserGame({width: window.innerWidth, height: window.innerHeight});
  }

}
