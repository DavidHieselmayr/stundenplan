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
  // tslint:disable-next-line:ban-types
  public currentschoolclass: String;
  public listofschoolclasses: Array<ESchoolclass>;
  public listofunitsserver: Array<EUnit>;
  public listofteachers: Array<ETeacher>;
  public days: Array<string> = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  public hours: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private db: Repository, private http: HttpClient) {
    this.db = db;
    this.title = 'stundenplan';
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.db.getAllTeachers().subscribe((data) => {
      this.listofteachers = data;
    });
    this.db.getAllSchoolClasses().subscribe((data) => {
      this.listofschoolclasses = data;
      this.currentschoolclass = this.listofschoolclasses[0].id;
      this.getUnitsbyClassname(this.currentschoolclass);
    });
  }

  // tslint:disable-next-line:typedef
  getUnit(hour: number, i: number): EUnit {
    let dummy: EUnit;
    for (const unit of this.listofunitsserver) {
      if (unit.day === i && unit.unit === hour) {
        dummy = unit;
      }
    }
    if (dummy === undefined) {
      dummy = new EUnit(0, i, hour, 'freiheit', 0, null, null);
      this.listofunitsserver.push(dummy);
    }
    return dummy;
  }

  save(): void {
    for (const unit of this.listofunitsserver) {
      if (unit.haschanged) {
        unit.schoolclassID = this.currentschoolclass.toString();
        console.log(this.currentschoolclass);
        console.log('save/haschanged!');
        this.db.saveUnit(unit).subscribe((data) => {
          console.log(data);
        });
      }
    }
  }

  getUnitsbyClassname(classname): void {
    this.db.getClassUnitsById(classname).subscribe((data: any[]) => {
      this.listofunitsserver = data;
      // tslint:disable-next-line:no-shadowed-variable
      console.log('data: ' + data);
    });
  }

  getTeacherWithId(id): string {
    for (const teacher of this.listofteachers) {
      if (teacher.id === id) {
        return teacher.lastname;
      }
    }
  }
}
