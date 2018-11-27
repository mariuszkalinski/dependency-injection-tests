import { IMusician } from '../../interfaces';
import { Bass } from '../instruments';

export class SteveHarris implements IMusician {
  public name: string = 'Steve Harris';

  constructor(public instrument: Bass) {}
}
