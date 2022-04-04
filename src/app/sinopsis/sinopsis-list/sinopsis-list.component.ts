import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sinopsis-list',
  templateUrl: './sinopsis-list.component.html',
  styleUrls: ['./sinopsis-list.component.css']
})
export class SinopsisListComponent implements OnInit {

  itemimageurl1 = '../assets/peakyBlinders.png';
  itemimageurl2 = '../assets/punisherr.png';
  itemimageurl3 = '../assets/breakingBad.png';
  itemimageurl4 = '../assets/how.png';
  itemimageurl5 = '../assets/chernobyl.png';
  itemimageurl6 = '../assets/unsolved.png';

  constructor() { }

  ngOnInit(): void {
  }

}
