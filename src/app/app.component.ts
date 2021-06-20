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
  public listofclasses: Array<ESchoolclass>;
  public listofunitsserver: Array<EUnit>;
  public listof2dimensionalunits: EUnit[][];
  public listofteachers: Array<ETeacher>;
  public column: Array<number> = [1, 2, 3, 4, 5];
  public row: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private db: Repository, private http: HttpClient) {
    this.db = db;
    this.title = 'stundenplan';
  }

  ngOnInit(): void {
    this.db.getAllClasses().subscribe(
      (val) => {
        this.listofclasses = val;
        this.getUnitsbyClassname(this.currentschoolclass);
        this.db.getAllTeachers().subscribe((data) => {
          this.listofteachers = data;
        });
      }
    );
  }

  // tslint:disable-next-line:typedef
  getUnit(row, column): EUnit {
    let currentUnit: EUnit;
    if (this.listofunitsserver != null) {
      for (const unit of this.listofunitsserver) {
        if (unit.day === column && unit.unit === row && unit.schoolclassID === this.currentschoolclass) {
          currentUnit = unit;
        }
      }

      if (currentUnit === undefined) {
        currentUnit = new EUnit(0, column, row, 'frei', 0, null, false);
        this.listofunitsserver.push(currentUnit);
        console.log('currentUnit === undefined');
      }
      return currentUnit;
    }

  }

  save(): void {
    for (const unit of this.listofunitsserver) {
      if (unit.haschanged) {
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
