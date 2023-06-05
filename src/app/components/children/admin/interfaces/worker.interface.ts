export interface IWorker {
  img: File,
  name: string,
  profession: string,
  age: string,
  currentSalary: string,
  email: string,
  phone: string,
  dateOfBirth: string,
  deviceDate: string,
  education: string,
  institution: string,
  place: string,
  key: string

  salaryStatistic: SalaryAtMoment[] ;
}

export type SalaryAtMoment = {
  date: string,
  sum: number,
}
