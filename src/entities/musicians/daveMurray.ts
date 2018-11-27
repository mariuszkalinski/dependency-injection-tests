import { inject, injectable } from 'inversify';
import { SERVICE_IDENTIFIER } from '../../constants/identifiers';
import { IInstrument, IMusician } from '../../interfaces';
import { Guitar } from '../instruments';

@injectable()
export class DaveMurray implements IMusician {
  public name: string = 'DaveMurray';
  public instrument: IInstrument;

  constructor(@inject(SERVICE_IDENTIFIER.INSTRUMENT) instrument: Guitar) {
    this.instrument = instrument;
  }
}
