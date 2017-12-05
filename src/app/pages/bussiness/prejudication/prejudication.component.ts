import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prejudication',
  templateUrl: './prejudication.component.html',
  styleUrls: ['./prejudication.component.scss']
})
export class PrejudicationComponent implements OnInit {

  cameras: any[] = [{
    title: '预审录入',
    source: 'assets/images/camera1.jpg',
  }, {
    title: '预审审核',
    source: 'assets/images/camera2.jpg',
  }];

  selectCamera(camera: any) {
    console.log(this.cameras);
    console.log(camera);
  }
  constructor() { }

  ngOnInit() {
  }

}
