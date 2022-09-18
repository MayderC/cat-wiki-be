

export interface ICatwikiService {

  getBreed(breed: string)
  getBreeds(): Promise<any>
  getImagesByBreed(breed: string)
  getTopBreeds(top: number)
  saveOrUpdateSearchBreed(breed: string, id_reference?: string, url?: string)

}