import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ESchoolclass} from './entity/ESchoolclass';
import {Observable} from 'rxjs';
import {EUnit, EUnitBackend} from './entity/EUnit';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class Repository {
  // tslint:disable-next-line:ban-types
  private url: String = 'http://localhost:8080/server/api/rest/';

  constructor(private http: HttpClient) {
  }

  public getAllSchoolClasses(): Observable<any> {
    return this.http.get(`${this.url}class/findAlL`);
  }

  public getClassUnitsById(classname): Observable<any> {
    return this.http.get(`${this.url}unit/findunitfromclassbyclassid/${classname}`);
  }

  public getAllTeachers(): Observable<any> {
    return this.http.get(`${this.url}teacher/findAll`);
  }

  public saveUnit(unit: EUnit): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const dummy = new EUnitBackend(unit.id, unit.day, unit.unit, unit.subject, unit.teacherID, unit.schoolclassID);
    return this.http.put(`${this.url}unit/save`, dummy, {responseType: 'json'});
  }
}
