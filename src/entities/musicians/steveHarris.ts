import { inject, injectable } from 'inversify';
import { SERVICE_IDENTIFIER } from '../../constants/identifiers';
import { IInstrument, IMusician } from '../../interfaces';
import { Bass } from '../instruments';

@injectable()
export class SteveHarris implements IMusician {
  public name: string = 'Steve Harris';
  public instrument: IInstrument;

  constructor(@inject(SERVICE_IDENTIFIER.INSTRUMENT) instrument: Bass) {
    this.instrument = instrument;
  }
}
