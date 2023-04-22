export interface IWorker {
  name: string,
  profession: string,
  age: string,
  currentSalary: string,
  additionalInformation: CardInformation[];
  salaryStatistic: SalaryAtMoment[] ;
  eventHistory: string[],
}


type CardInformation = {
  label: string,
  value: string,
}

type SalaryAtMoment = {
  date: string,
  sum: number,
}
