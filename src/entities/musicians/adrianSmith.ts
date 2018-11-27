import { IMusician } from '../../interfaces';
import { Guitar } from '../instruments';

export class AdrianSmith implements IMusician {
  public name: string = 'Adrian Smith';

  constructor(public instrument: Guitar) {}
}
