import { Satellite } from './../satellite';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
@Input() satellites:Satellite[];
categories:string[]=['Space Debris','Communication','Probe','Positioning','Space Station','Telescope']
  constructor() { }

  ngOnInit() {
  }
typeCount(category:string):number{
  let count:number=0;
  for(let item in this.satellites){
  this.satellites[item].type===category;
  count++;
}
return count
}
}
