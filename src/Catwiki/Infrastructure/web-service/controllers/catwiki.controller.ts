import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ICatwikiService } from './../../../Application/Ports/Services/ICatwikiService';

@Controller('api/catwiki')
export class CatwikiController {
  constructor(
    @Inject('ICatwikiServie') private readonly _catService: ICatwikiService,
  ) {}

  @Get('/breeds')
  async getBreeds() {
    return await this._catService.getBreeds();
  }

  @Get('/breeds/search')
  async getBreedByName(@Query('name') breed: string) {
    return await this._catService.getBreed(breed);
  }

  @Get('/breeds/images')
  async getImagesByBreed(@Query('breed') breed: string) {
    return await this._catService.getImagesByBreed(breed);
  }

  @Get('/breeds/top')
  async getTopBreeds(@Query('quantity') quantity: number) {
    return await this._catService.getTopBreeds(quantity);
  }
}
