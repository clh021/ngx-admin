import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  user_id = '5';
  category_id = '3';
  content = '易驹所二手车重构';
  private test_url = 'http://ty2shouche.com/api.test/api.php/posts';
  constructor(private http: Http) { }
  // constructor(private http: HttpClient) { }//会多发一次OPTIONI链接

  ngOnInit() {
  }

  onSubmit(): void{
    // this.http.post(this.test_url,{user_id:this.user_id, category_id:this.category_id, content:this.content})//两种都可以
    // // this.http.post(this.test_url,JSON.stringify({user_id:this.user_id, category_id:this.category_id, content:this.content}))//两种都可以
    //   .map(res => {
    //     console.log(res);
    // }).subscribe();

    this.http.post(this.test_url, {user_id:this.user_id, category_id:this.category_id, content:this.content}).toPromise().then((response) => {
      console.log(response);
    });

    this.http.get(this.test_url).map(res => {
      console.log(res);
    }).subscribe();
  }
}
