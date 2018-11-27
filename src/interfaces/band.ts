import { IMusician } from './musician';

export interface IBand {
  name: string;
  vocalist: IMusician;
  bassist: IMusician;
  drummer: IMusician;
  firstGuitar: IMusician;
  secondGuitar: IMusician;
  thirdGuitar: IMusician;
  play(): string;
}
