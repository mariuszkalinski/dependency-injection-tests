import { IMusician } from '../../interfaces';
import { Guitar } from '../instruments';

export class DaveMurray implements IMusician {
  public name: string = 'DaveMurray';

  constructor(public instrument: Guitar) {}
}
