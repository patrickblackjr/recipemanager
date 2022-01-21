import mongoose, { Mongoose, Schema } from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

export const InstructionSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  stepNumber: {
    type: Number,
    required: true,
    default: 1,
    unique: true,
  },
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe',
  },
})

export const Instruction = mongoose.model('Instruction', InstructionSchema)
export const InstructionTC = composeWithMongoose(Instruction)
