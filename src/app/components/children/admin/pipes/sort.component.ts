import { Pipe, PipeTransform } from '@angular/core';
import { IWorkers } from '../interfaces/workers.interface';

export enum SortBy {
  noSort = 0,
  name = 1,
  position = 2,
  place = 3,
  salary = 4
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
      
      if(sortBy === SortBy.name || sortBy === -SortBy.name){
        return sortBy === SortBy.name ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      if(sortBy === SortBy.position || sortBy === -SortBy.position){
        return sortBy === SortBy.position ? a.profession.localeCompare(b.profession) : b.profession.localeCompare(a.profession);
      }
      if(sortBy === SortBy.place || sortBy === -SortBy.place){
        return sortBy === SortBy.place ? a.place.localeCompare(b.place) : b.place.localeCompare(a.place);
      }
      if(sortBy === SortBy.salary || sortBy === -SortBy.salary){
        return sortBy === SortBy.salary ? b.currentSalary - a.currentSalary : a.currentSalary - b.currentSalary;
      }

      return 0;
    });
  }
}
