import { Container } from 'inversify';
import 'reflect-metadata';

import { Bass, Drumms, Guitar, Vocal } from './entities/instruments';

import {
  AdrianSmith,
  BruceDickinson,
  DaveMurray,
  JanickGers,
  NickoMcBrain,
  SteveHarris,
} from './entities/musicians';

import { SERVICE_IDENTIFIER } from './constants/identifiers';
import { TAG } from './constants/tags';
import { Band } from './entities/band/band';
import { IBand, IInstrument, IMusician } from './interfaces';

const container = new Container();

container
  .bind<IMusician>(SERVICE_IDENTIFIER.MUSICIAN)
  .to(AdrianSmith)
  .whenTargetNamed(TAG.GUITAR1);
container
  .bind<IMusician>(SERVICE_IDENTIFIER.MUSICIAN)
  .to(BruceDickinson)
  .whenTargetNamed(TAG.VOCAL);
container
  .bind<IMusician>(SERVICE_IDENTIFIER.MUSICIAN)
  .to(DaveMurray)
  .whenTargetNamed(TAG.GUITAR2);
container
  .bind<IMusician>(SERVICE_IDENTIFIER.MUSICIAN)
  .to(JanickGers)
  .whenTargetNamed(TAG.GUITAR3);
container
  .bind<IMusician>(SERVICE_IDENTIFIER.MUSICIAN)
  .to(NickoMcBrain)
  .whenTargetNamed(TAG.DRUMMS);
container
  .bind<IMusician>(SERVICE_IDENTIFIER.MUSICIAN)
  .to(SteveHarris)
  .whenTargetNamed(TAG.BASS);

container
  .bind<IInstrument>(SERVICE_IDENTIFIER.INSTRUMENT)
  .to(Bass)
  .whenParentNamed(TAG.BASS);
container
  .bind<IInstrument>(SERVICE_IDENTIFIER.INSTRUMENT)
  .to(Drumms)
  .whenParentNamed(TAG.DRUMMS);
container
  .bind<IInstrument>(SERVICE_IDENTIFIER.INSTRUMENT)
  .to(Guitar)
  .whenParentNamed(TAG.GUITAR1);
container
  .bind<IInstrument>(SERVICE_IDENTIFIER.INSTRUMENT)
  .to(Guitar)
  .whenParentNamed(TAG.GUITAR2);
container
  .bind<IInstrument>(SERVICE_IDENTIFIER.INSTRUMENT)
  .to(Guitar)
  .whenParentNamed(TAG.GUITAR3);
container
  .bind<IInstrument>(SERVICE_IDENTIFIER.INSTRUMENT)
  .to(Vocal)
  .whenParentNamed(TAG.VOCAL);
container.bind<IBand>(SERVICE_IDENTIFIER.BAND).to(Band);

const response = container.get<IBand>(SERVICE_IDENTIFIER.BAND);
console.log(response.play()); //tslint:disable-line
