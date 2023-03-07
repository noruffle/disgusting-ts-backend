import mongoose from 'mongoose';

// Schema
const toolsSchema = new mongoose.Schema(
  {
    toolName: String
  }
)

export default mongoose.model('Tool', toolsSchema)