import { IMusician } from './musician';

export interface IBand {
  vocalist: IMusician;
  bassist: IMusician;
  drummer: IMusician;
  firstGuitar: IMusician;
  secondGuitar: IMusician;
  thirdGuitar: IMusician;
  play(): string;
}
