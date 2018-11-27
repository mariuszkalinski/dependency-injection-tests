import { IInstrument } from '../../interfaces';

export class Vocal implements IInstrument {
  constructor(public name: string = 'Vocal') {}
}
