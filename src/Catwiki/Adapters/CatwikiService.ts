import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { rmSync } from 'fs';
import { Model } from 'mongoose';
import { TopBreed, TopBreedDocument } from '../Infrastructure/database/topbreed.model';
import { ICatwikiService } from './../Application/Ports/Services/ICatwikiService';

@Injectable()
export class CatwikiServie implements ICatwikiService {


  constructor(
    private readonly httpService: HttpService,
    @InjectModel(TopBreed.name) private topBreed : Model<TopBreedDocument>
    ){}


  async saveOrUpdateSearchBreed(breed: string) {
    const res = await this.topBreed.findOne({name: breed})
    if(res){
      await this.topBreed.findOneAndUpdate({name: breed}, {total: res.total+1 }, {new: true}).exec()
      return
    }
   await this.topBreed.create({name: breed, total: 1})
  }

  async getBreed(breed: string) {
    const res = await this.httpService.axiosRef.get('/breeds/search?q='+breed)
    this.saveOrUpdateSearchBreed(breed)
    return res.data
  }

  async getImagesByBreed(breed: string) {
    const res =  (await this.httpService.axiosRef.get('/images/search?limit=10&breed_ids='+breed)).data
    return res.map(({breeds, ...res}) => res)
  }

  async getTopBreeds(top: number) {
    return await this.topBreed.find().sort({total: 'desc'}).limit(top).exec()
  }
  
  async getBreeds() : Promise<string[]> {
    const res = await this.httpService.axiosRef.get('/breeds')
    return res.data.map(x => ({name:x.name, id:x.id}))
  }

}