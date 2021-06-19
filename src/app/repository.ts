import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ESchoolclass} from './entity/ESchoolclass';
import {Observable} from 'rxjs';
import {EUnit} from './entity/EUnit';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class Repository {
  // tslint:disable-next-line:ban-types
  private url: String = 'http://localhost:8080/server/api/rest/';

  constructor(private http: HttpClient) {
  }

  public getAllClasses(): Observable<any> {
    console.log('getAllClasses');
    return this.http.get(`${this.url}class/findAlL`);
  }

  public getClassUnitsById(classname): Observable<any> {
    return this.http.get(`${this.url}unit/findunitfromclassbyclassid/${classname}`);
  }

  public getAllTeachers(): Observable<any> {
    console.log('getAllTeachers');
    return this.http.get(`${this.url}teacher/findAll`);
  }

  public saveUnit(unit: EUnit): Observable<any> {
    return this.http.put(`${this.url}teacher/findAll`, unit, {responseType: 'json'});
  }
}
