import mongoose from 'mongoose'

const MicrositeSchema = new mongoose.Schema({
  meta: {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide an owner.'],
    },
    logo: {
      source: {
        file: { type: Buffer, required: true },
        filename: { type: String, required: true },
      },
      alt: { type: String, required: true },
    },
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
    },
  },
  components: {
    type: Array,
    required: [true, 'Please provide at least a component.'],
  },
})

MicrositeSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id
    delete ret.hash
  },
})

export default mongoose.models.MicrositeSchema ||
  mongoose.model('Microsite', MicrositeSchema)
