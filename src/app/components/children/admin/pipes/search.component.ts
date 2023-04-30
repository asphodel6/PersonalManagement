import { Pipe, PipeTransform } from '@angular/core';
import { IUser, IWorkers } from '../interfaces/workers.interface';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  public transform(items: IWorkers[], searchText: string): IWorkers[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it: IWorkers ) => {
      return it.name.toLocaleLowerCase().includes(searchText) || it.place.toLocaleLowerCase().includes(searchText) || it.profession.toLocaleLowerCase().includes(searchText);
    });
  }
}
