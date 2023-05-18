import { Pipe, PipeTransform } from '@angular/core';
import { IWorkers } from '../interfaces/workers.interface';

export enum SortBy {
  name,
  position,
  place,
  salary
}

@Pipe({ name: 'appSort' })
export class SortPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param sortBy search string
   * @returns list of elements filtered by search text or []
   */
  public transform(items: IWorkers[] | null, sortBy: SortBy): IWorkers[] {
    if (!items) {
      return [];
    }

    return items.sort((a: IWorkers, b: IWorkers) => {
      
      if(sortBy === SortBy.name){
        return a.name.localeCompare(b.name);
      }
      if(sortBy === SortBy.position){
        return a.profession.localeCompare(b.profession);
      }
      if(sortBy === SortBy.place){
        return a.place.localeCompare(b.place);
      }
      if(sortBy === SortBy.salary){
        return b.currentSalary - a.currentSalary;
      }

      return 0;
    });
  }
}
