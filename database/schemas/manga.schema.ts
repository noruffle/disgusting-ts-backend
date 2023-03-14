import {Schema, model} from 'mongoose';
import {Request} from 'express';
import { Response } from 'express';

interface IManga {
  title?: string;
  description?: string;
  posters?: object;
  author?: string;
  illustrator?: string;
  publisher?: string;
  volumes?: number;
  chapters?: {    
    id?: number;
    chapterName?: string;
    frames?: [{
      url?: string;
      comments?: [{
        authorId: number;
        comment: string;
        date: string;
      }]
    }]
  }
  genres?: object;
  rating?: number;
}

const schema = new Schema<IManga>({
  title: {type: String, required: true, unique: true},
  description: {type: String, required: true, unique: true},
  posters: {type: Object, requied: true},
  author: {type: String, required: true, unique: false, ref:"Authors"},
  illustrator: {type: String, required: false, unique: false, ref:"Authors"},
  publisher: {type: String, required: false, unique: false},
  chapters: {
    type: Object,

    id: Number,
    chapterName: String,
    frames: [{
      type: Object,

      url: String,
      comments: [{
        type: Object,

        authorId: Number,
        comment: String,
        date: String
      }]
    }]
  },
  volumes: {type: Number, required: true, min: 0, default: 0},
  genres: {type: String, reuired: true, ref: "Genres"},
  rating: {type: Number}
})

class ServiceOfManga {

  public manga = model<IManga>('manga', schema)

  async allManga() {
    const all = this.manga
      .find()
      .exec()

    return all;
  }

  async findByQueryManga(req: Request) {
    const {...query} = req.body;
    const mangaFoundedbyQuery = await this.manga
      .findOne(query)
      .exec()
    
    return mangaFoundedbyQuery;
  }

  async findByIdManga(req: Request) {
    const {id} = req.params;
    const mangaFounded = await this.manga
      .findById(id)
      .exec()
    
    return mangaFounded;
  }

  async postManga(req: Request) {
    const {...body} = req.body;
    const mangaCreated = await this.manga
      .create(body)
    
    return mangaCreated.save();
  }
  
  async patchManga(req: Request) {
    const {id} = req.params;
    const {...update} = req.body;
    const mangaUpdated = await this.manga
      .findByIdAndUpdate(id, update)
      .exec()
    
    return mangaUpdated;
  }
  
  async deleteManga(req: Request) {
    const {id} = req.params;
    const mangaDeleted = await this.manga
      .findByIdAndRemove(id)
      .exec()
      
    return mangaDeleted;
  }
}

export const manga = new ServiceOfManga();