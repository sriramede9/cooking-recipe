import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipes'
})
export class RecipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
