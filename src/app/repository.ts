import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ESchoolclass} from './entity/ESchoolclass';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class Repository {
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public getAllClasses(): Observable<any> {
    console.log('getAllClasses');
    return this.http.get('http://localhost:8080/server/api/rest/class/findAll');
  }
}