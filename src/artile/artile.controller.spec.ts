import { Test, TestingModule } from '@nestjs/testing';
import { ArtileController } from './artile.controller';

describe('ArtileController', () => {
  let controller: ArtileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtileController],
    }).compile();

    controller = module.get<ArtileController>(ArtileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
