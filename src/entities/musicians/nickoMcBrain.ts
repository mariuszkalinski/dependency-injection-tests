import { inject, injectable } from 'inversify';
import { SERVICE_IDENTIFIER } from '../../constants/identifiers';
import { IInstrument, IMusician } from '../../interfaces';
import { Drumms } from '../instruments';

@injectable()
export class NickoMcBrain implements IMusician {
  public name: string = 'Nicko McBrain';
  public instrument: IInstrument;

  constructor(@inject(SERVICE_IDENTIFIER.INSTRUMENT) instrument: Drumms) {
    this.instrument = instrument;
  }
}
