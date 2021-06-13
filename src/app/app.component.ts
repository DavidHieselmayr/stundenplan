import {Component, OnInit} from '@angular/core';
import {Repository} from './repository';
import {ESchoolclass} from './entity/ESchoolclass';
import {EUnit} from './entity/EUnit';
import {ETeacher} from './entity/ETeacher';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title: string;
  public currentschoolclass: string;
  public currentunit: EUnit;
  public listofclasses: Array<ESchoolclass>;
  public listofunitsserver: Array<EUnit>;
  public listof2dimensionalunits: EUnit[][];
  public listofteachers: Array<ETeacher>;
  public column: Array<number> = [1, 2, 3, 4, 5];
  public row: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private dayNames: Array<string> = ['MON', 'TUE', 'WED', 'THU', 'FRI']
  private unitNumbers: Array<number> = [1, 2, 3, 4, 5];

  constructor(private db: Repository, private http: HttpClient) {
    this.db = db;
    // TODO fix dg.getAllClasses
    // TODO define standard schoolclass (select)
    // TODO define correct teacher
    /*
    * Grund: CORS header 'AccessGrund: CORS-Kopfzeile 'Access-Control-Allow-Origin' fehlt
    * */
    this.title = 'stundenplan';
    this.listofunitsserver = [
      {
        id: 4,
        day: 1,
        unit: 3,
        subject: 'INSY',
        teacherID: 3,
        schoolclassID: '5BHITM'
      },
      {
        id: 5,
        day: 1,
        unit: 4,
        subject: 'ITP',
        teacherID: 3,
        schoolclassID: '5BHITM'
      },
      {
        id: 6,
        day: 1,
        unit: 5,
        subject: 'ITP',
        teacherID: 3,
        schoolclassID: '5BHITM'
      },
      {
        id: 4,
        day: 2,
        unit: 3,
        subject: 'INSY',
        teacherID: 3,
        schoolclassID: '5BHITM'
      },
      {
        id: 4,
        day: 3,
        unit: 3,
        subject: 'INSY',
        teacherID: 3,
        schoolclassID: '5BHITM'
      },
      {
        id: 4,
        day: 4,
        unit: 3,
        subject: 'INSY',
        teacherID: 3,
        schoolclassID: '5BHITM'
      }, {
        id: 4,
        day: 5,
        unit: 3,
        subject: 'INSY',
        teacherID: 3,
        schoolclassID: '5BHITM'
      },
    ];
    this.listofclasses = [
      {
        id: '3BHITM',
        room: '137'
      },
      {
        id: '4BHITM',
        room: '136'
      },
      {
        id: '5BHITM',
        room: '135'
      }
    ];
    this.listofteachers = [
      {
        id: 1,
        firstname: 'Gerald',
        lastname: 'Aistleitner',
        room: 'U12'
      },
      {
        id: 2,
        firstname: 'Herbert',
        lastname: 'Lackinger',
        room: '221'
      },
      {
        id: 3,
        firstname: 'Johannes',
        lastname: 'Tumfahrt',
        room: 'E42'
      }
    ];
  }


  ngOnInit(): void {
    console.log('ngOnInit');
    this.db.getAllClasses().subscribe((data: any[]) => {
      this.listofclasses = data;
    });
    /*
    this.db.getAllClasses().subscribe(
      (val) => {
        console.log(val);
        this.listofclasses = val;
      }
    );*/
  }

  // tslint:disable-next-line:typedef
  checkIfUnitExists(row, column) {
    for (let unit of this.listofunitsserver) {
      if (unit.day == column && unit.unit == row && unit.schoolclassID == this.currentschoolclass) {
        this.currentunit = unit;
        return true;
      }
    }
    return false;
  }

  save(): void {
    console.log('save!');
  }

  getUnitsbyClassname(classname): void {
    this.db.getClassUnitsById(classname).subscribe((data: any[]) => {
      this.listofunitsserver = data;
      console.log('data: ' + data);
    });
  }


  /*
    getUnitsbyClassname(classname): void {
      console.log('getUnitbyClassname');
      this.http.get(`http://localhost:8080/server/api/rest/unit/findunitfromclassbyclassid/${classname}`, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          }, responseType: 'text'
        }
      ).subscribe((data) => {
        console.log(data);
      });
    }*/
}
