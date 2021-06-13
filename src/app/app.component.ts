import {Component, OnInit} from '@angular/core';
import {Repository} from './repository';
import {ESchoolclass} from './entity/ESchoolclass';
import {EUnit} from './entity/EUnit';
import {ETeacher} from './entity/ETeacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public currentschoolclass: string;
  public listofclasses: Array<ESchoolclass>;
  public listofunitsserver: Array<EUnit>;
  public listofteachers: Array<ETeacher>;
  public column: Array<number> = [1, 2, 3, 4, 5];
  public row: Array<number> = [1, 2, 3, 4, 5];

  constructor(private db: Repository) {
    this.db = db;
    // TODO fix dg.getAllClasses
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
    /*
    this.db.getAllClasses().subscribe(
      (val) => {
        console.log(val);
        this.listofclasses = val;
      }
    );*/
  }
}
