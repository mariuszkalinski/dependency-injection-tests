import { injectable } from 'inversify';

import { IInstrument } from '../../interfaces';

@injectable()
export class Vocal implements IInstrument {
  constructor(public name: string = 'Vocal') {}
}
