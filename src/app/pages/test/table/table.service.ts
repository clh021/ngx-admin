import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {TableDefaultModel,RecordModel} from "./table.model";

@Injectable()
export class TableService {

  public data = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mdo',
      email: 'mdo@gmail.com',
      age: '28',
    }, {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@fat',
      email: 'fat@yandex.ru',
      age: '45',
    }, {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      username: '@twitter',
      email: 'twitter@outlook.com',
      age: '18',
    }, {
      id: 4,
      firstName: 'John',
      lastName: 'Snow',
      username: '@snow',
      email: 'snow@gmail.com',
      age: '20',
    }, {
      id: 10,
      firstName: 'Karen',
      lastName: 'Sevan',
      username: '@karen',
      email: 'karen@yandex.ru',
      age: '33',
    }, {
      id: 15,
      firstName: 'Krikor',
      lastName: 'Bedros',
      username: '@krikor',
      email: 'krikor@yandex.ru',
      age: '32',
    }, {
      'id': 16,
      'firstName': 'Francisca',
      'lastName': 'Brady',
      'username': '@Gibson',
      'email': 'franciscagibson@comtours.com',
      'age': 11,
    }, {
      'id': 17,
      'firstName': 'Tillman',
      'lastName': 'Figueroa',
      'username': '@Snow',
      'email': 'tillmansnow@comtours.com',
      'age': 34,
    }, {
      'id': 21,
      'firstName': 'Cora',
      'lastName': 'Parker',
      'username': '@Caldwell',
      'email': 'coracaldwell@comtours.com',
      'age': 27,
    }, {
      'id': 22,
      'firstName': 'Cindy',
      'lastName': 'Bond',
      'username': '@Velez',
      'email': 'cindyvelez@comtours.com',
      'age': 24,
    }, {
      'id': 23,
      'firstName': 'Frieda',
      'lastName': 'Tyson',
      'username': '@Craig',
      'email': 'friedacraig@comtours.com',
      'age': 45,
    }];
  public posts:any;
  private headers = new Headers({'Content-Type': 'application/json'});
  private test_url = 'http://ty2shouche.com/api.test/api.php/posts';
  constructor(private http: Http) {
  }
  getData() {
    return this.data;
  }
  getPosts(): Promise<RecordModel[]> {
    return this.http.get(this.test_url+'?transform=1')
      .toPromise()
      .then(response => response.json().posts as RecordModel[])
      .catch(this.handleError);
  }


  getPost(id: number): Promise<RecordModel> {
    const url = `${this.test_url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as RecordModel)
      .catch(this.handleError);
  }

  create(name: string): Promise<RecordModel> {
    return this.http
      .post(this.test_url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as RecordModel)
      .catch(this.handleError);
  }

  update(hero: RecordModel): Promise<RecordModel> {
    const url = `${this.test_url}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
