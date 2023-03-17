

export default interface typeAnime {
  title: String,
  status: {
    type: String,
    enum: ['Released', 'Ongoing', 'No released'], 
    default: 'No released'
  }
  description: String,
}