import {Model} from 'mongoose';
import {Cat, CatDocument} from './schemas/cat.schema';

class CatsService {
  constructor(
    private readonly catModel: Model<CatDocument>,
  ) {}

  //async create(createCAtDto)

  async findall(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }

  async findone(name: String): Promise<Cat> {
    return this.catModel.findOne({name: name}).exec()    
  }
}