

export interface ICatwikiService {

  getBreed(breed: string)
  getBreeds(): Promise<any>
  getImagesByBreed(breed: string)
  getTopBreeds(top: number)
  saveSearch(breed: string)

}