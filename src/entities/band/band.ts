import { inject, injectable, named } from 'inversify';

import { SERVICE_IDENTIFIER } from '../../constants/identifiers';
import { TAG } from '../../constants/tags';
import { IBand, IMusician } from '../../interfaces';

@injectable()
export class Band implements IBand {
  public vocalist: IMusician;
  public bassist: IMusician;
  public drummer: IMusician;
  public firstGuitar: IMusician;
  public secondGuitar: IMusician;
  public thirdGuitar: IMusician;

  constructor(
    @inject(SERVICE_IDENTIFIER.MUSICIAN) @named(TAG.VOCAL) vocalist: IMusician,
    @inject(SERVICE_IDENTIFIER.MUSICIAN) @named(TAG.BASS) bassist: IMusician,
    @inject(SERVICE_IDENTIFIER.MUSICIAN) @named(TAG.DRUMMS) drummer: IMusician,
    @inject(SERVICE_IDENTIFIER.MUSICIAN) @named(TAG.GUITAR1) firstGuitar: IMusician,
    @inject(SERVICE_IDENTIFIER.MUSICIAN) @named(TAG.GUITAR2) secondGuitar: IMusician,
    @inject(SERVICE_IDENTIFIER.MUSICIAN) @named(TAG.GUITAR3) thirdGuitar: IMusician
  ) {
    this.vocalist = vocalist;
    this.bassist = bassist;
    this.drummer = drummer;
    this.firstGuitar = firstGuitar;
    this.secondGuitar = secondGuitar;
    this.thirdGuitar = thirdGuitar;
  }

  public play() {
    const formatedRoles = `
      Musicians:
        ${this.vocalist.name} - ${this.vocalist.instrument.name}
        ${this.bassist.name} - ${this.bassist.instrument.name}
        ${this.drummer.name} - ${this.drummer.instrument.name}
        ${this.firstGuitar.name} - ${this.firstGuitar.instrument.name}
        ${this.secondGuitar.name} - ${this.secondGuitar.instrument.name}
        ${this.thirdGuitar.name} - ${this.thirdGuitar.instrument.name}
    `;
    return formatedRoles;
  }
}
