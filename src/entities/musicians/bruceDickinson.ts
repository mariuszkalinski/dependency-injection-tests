import { inject, injectable } from 'inversify';
import { SERVICE_IDENTIFIER } from '../../constants/identifiers';
import { IInstrument, IMusician } from '../../interfaces';
import { Vocal } from '../instruments';

@injectable()
export class BruceDickinson implements IMusician {
  public name: string = 'Bruce Dickinson';
  public instrument: IInstrument;

  constructor(@inject(SERVICE_IDENTIFIER.INSTRUMENT) instrument: Vocal) {
    this.instrument = instrument;
  }
}
