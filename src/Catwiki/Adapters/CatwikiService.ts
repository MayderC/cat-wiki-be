import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { rmSync } from 'fs';
import { ICatwikiService } from './../Application/Ports/Services/ICatwikiService';

@Injectable()
export class CatwikiServie implements ICatwikiService {


  constructor(private readonly httpService: HttpService){}

  async saveSearch(breed: string) {
    throw new Error('Method not implemented.');
  }

  async getBreed(breed: string) {
    const res = await this.httpService.axiosRef.get('/breeds/search?q='+breed)
    return res.data
  }

  getImagesByBreed(breed: string) {
    throw new Error('Method not implemented.');
  }

  getTopBreeds(top: number) {
    throw new Error('Method not implemented.');
  }
  
  async getBreeds() : Promise<string[]> {

    const res = await this.httpService.axiosRef.get('/breeds')
    return res.data.map(x => x.name)
  
  }

}