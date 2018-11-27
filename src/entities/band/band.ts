import { IBand, IMusician } from '../../interfaces';
export class Band implements IBand {
  constructor(
    public name: string,
    public vocalist: IMusician,
    public bassist: IMusician,
    public drummer: IMusician,
    public firstGuitar: IMusician,
    public secondGuitar: IMusician,
    public thirdGuitar: IMusician
  ) {}

  public play() {
    const formatedRoles = `
      BAND NAME: ${this.name}
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
