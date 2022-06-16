import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

const goal = mongoose.model('Goal', goalSchema)

export { goal }
