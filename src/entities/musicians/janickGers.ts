import { IMusician } from '../../interfaces';
import { Guitar } from '../instruments';

export class JanickGers implements IMusician {
  public name: string = 'Janick Gers';

  constructor(public instrument: Guitar) {}
}
