import { injectable } from 'inversify';
import { IInstrument } from '../../interfaces';

@injectable()
export class Bass implements IInstrument {
  constructor(public name: string = 'Bass') {}
}
