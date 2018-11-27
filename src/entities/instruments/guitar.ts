import { IInstrument } from '../../interfaces';

export class Guitar implements IInstrument {
  constructor(public name: string = 'Guitar') {}
}
