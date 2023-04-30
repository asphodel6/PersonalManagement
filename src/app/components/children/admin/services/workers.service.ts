import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces/workers.interface';

@Injectable()
export class WorkersService  {

  public users: IUser[] = [
    {
      name: 'Баранов Виктор',
      position: 'Главный бухгалтер',
      place: 'АО “Альфа-Банк”',
      salary: 18500,
    },
    {
      name: 'Морозов Святослав',
      position: 'Аналитик',
      place: 'АО “Альфа-Банк”',
      salary: 52000,
    },
    {
      name: 'Касаткин Михаил',
      position: 'Разработчик',
      place: 'Мира 32',
      salary: 190000,
    },
    {
      name: 'Анисимов Артемий',
      position: 'Главный бухгалтер',
      place: 'АО “Альфа-Банк”',
      salary: 18500,
    },
    {
      name: 'Дубровин Лев',
      position: 'Аналитик',
      place: 'АО “Альфа-Банк”',
      salary: 52000,
    },
    {
      name: 'Лазарева Ярослава',
      position: 'Разработчик',
      place: 'Мира 32',
      salary: 190000,
    },
    {
      name: 'Куприянова Арина',
      position: 'Главный бухгалтер',
      place: 'АО “Альфа-Банк”',
      salary: 18500,
    },
    {
      name: 'Щукин Александр',
      position: 'Аналитик',
      place: 'АО “Альфа-Банк”',
      salary: 52000,
    },
    {
      name: 'Гладкова Мария',
      position: 'Главный бухгалтер',
      place: 'Мира 32',
      salary: 190000,
    },
    {
      name: 'Киреева Ирина',
      position: 'Разработчик',
      place: 'АО “Альфа-Банк”',
      salary: 18500,
    },
    {
      name: 'Высоцкий Давид',
      position: 'Аналитик',
      place: 'АО “Альфа-Банк”',
      salary: 52000,
    },
    {
      name: 'Козин Давид',
      position: 'Разработчик',
      place: 'Мира 32',
      salary: 190000,
    },
  ];

  constructor(private _http: HttpClient) {}

  public getUsers(event: PageEvent | null | undefined): Observable<IUser[]> {
    console.log(event);

    if(event === null || event === undefined){
      return of(this.users);
    }
    else{
      //htttp request here
      return of(this.users.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize));
    }
  }

  public getCount(): number {
    return this.users.length;
  }
}
