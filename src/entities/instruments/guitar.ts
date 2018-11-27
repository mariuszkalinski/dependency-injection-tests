import { injectable } from 'inversify';
import { IInstrument } from '../../interfaces';

@injectable()
export class Guitar implements IInstrument {
  constructor(public name: string = 'Guitar') {}
}
