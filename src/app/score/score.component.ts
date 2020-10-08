import { Component, OnInit } from '@angular/core';
import { Score } from '../score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  currentscore: Score = {
    playerID: 1,
    score: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
