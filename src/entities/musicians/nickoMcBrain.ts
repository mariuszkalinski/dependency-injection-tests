import { IMusician } from '../../interfaces';
import { Drumms } from '../instruments';

export class NickoMcBrain implements IMusician {
  public name: string = 'Nicko McBrain';

  constructor(public instrument: Drumms) {}
}
