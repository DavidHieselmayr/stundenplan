export class EUnit {
  constructor(
    public id: number,
    public day: number,
    public unit: number,
    public subject: string,
    public teacherID: number,
    public schoolclassID: string,
    public haschanged: boolean
  ) {
  }
}

export class EUnitBackend {
  constructor(
    public id: number,
    public day: number,
    public unit: number,
    public subject: string,
    public teacherID: number,
    public schoolclassID: string) {
  }
}

