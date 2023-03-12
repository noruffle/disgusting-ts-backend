import mongoose, { InferSchemaType, model } from 'mongoose';

const mangaSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  poster: {type: String, requied: true},
  author: {type: String, required: true, unique: false, ref:"Authors"},
  illustrator: {type: String, required: true, unique: false, ref:"Authors"},
  publisher: {type: String, required: true, unique: false},
  volumes: {type: Number, required: true, min: 0, default: 0},
  genres: {type: String, reuired: true, ref: "Genres"},
  rating: {type: Number}
})

type Manga = InferSchemaType<typeof mangaSchema>

export default model<Manga>("Manga", mangaSchema)