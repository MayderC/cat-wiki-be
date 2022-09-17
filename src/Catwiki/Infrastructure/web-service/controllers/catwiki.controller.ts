import { Controller, Get, Inject, Param, Query } from "@nestjs/common";
import { query } from "express";
import { ICatwikiService } from './../../../Application/Ports/Services/ICatwikiService';


@Controller('api/catwiki')
export class CatwikiController {

  constructor(@Inject('ICatwikiServie') private readonly  _catService : ICatwikiService){}

  @Get('/breeds')
  async getBreeds(){
    return await this._catService.getBreeds()
  }

  @Get('/breeds/search')
  async getBreedByName(@Query('name') breed : string){
    return await this._catService.getBreed(breed) 
  }

  @Get('/breeds/images')
  async getImagesByBreed(@Query('breed') breed: string){
    return await this._catService.getImagesByBreed(breed)
  }

}

