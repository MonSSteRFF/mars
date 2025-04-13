import {makeAutoObservable} from 'mobx';

import {Cameras, QueryByDate} from '../lib/Curiosity/Query.ts';
import {Photo} from '../lib/Curiosity/Query.types.ts';

class PhotoStorage {
  photos: {[key: string]: Photo[]} = {0: []};
  page: number = 0;
  lastRequestData: {camera: keyof typeof Cameras; date: Date} | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async openGallery(q: {date: Date; camera: keyof typeof Cameras}) {
    this.lastRequestData = q;
    const photos = await QueryByDate({...q, page: this.page});
    this.photos[this.page] = photos;

    return photos.length > 0;
  }

  async nextPage() {
    if (this.photos[this.page].length >= 25 && this.lastRequestData !== null) {
      this.page++;
      this.photos[this.page] = await QueryByDate({...this.lastRequestData, page: this.page});
      console.log(this.photos);
    }
  }
}

export default PhotoStorage;
