import { IMusician } from '../../interfaces';
import { Vocal } from '../instruments';

export class BruceDickinson implements IMusician {
  public name: string = 'Bruce Dickinson';

  constructor(public instrument: Vocal) {}
}
