import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ICatwikiService } from './../../../Application/Ports/Services/ICatwikiService';


@Controller('api/catwiki')
export class CatwikiController {

  constructor(@Inject('ICatwikiServie') private readonly  _catService : ICatwikiService){}


  @Get('/breeds')
  async getBreeds(){
    return await this._catService.getBreeds()
  }


  @Get('/breeds/:name')
  async getBreedByName(@Param('name') breed : string){

    const res = await this._catService.getBreed(breed)
    
    return res
  }

}

