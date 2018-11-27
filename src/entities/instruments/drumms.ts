import { injectable } from 'inversify';
import { IInstrument } from '../../interfaces';

@injectable()
export class Drumms implements IInstrument {
  constructor(public name: string = 'Drumms') {}
}
