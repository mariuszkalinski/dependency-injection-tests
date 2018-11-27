import { Bass, Drumms, Guitar, Vocal } from './entities/instruments';

import {
  AdrianSmith,
  BruceDickinson,
  DaveMurray,
  JanickGers,
  NickoMcBrain,
  SteveHarris,
} from './entities/musicians';

import { Band } from './entities/band/band';

const vocalist = new BruceDickinson(new Vocal());
const bassist = new SteveHarris(new Bass());
const drummer = new NickoMcBrain(new Drumms());
const firstGuitar = new AdrianSmith(new Guitar());
const secondGuitar = new DaveMurray(new Guitar());
const thirdGuitar = new JanickGers(new Guitar());

const ironMaiden = new Band(
  'Iron Maiden',
  vocalist,
  bassist,
  drummer,
  firstGuitar,
  secondGuitar,
  thirdGuitar
);

console.log(ironMaiden.play()); //tslint:disable-line
