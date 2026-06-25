const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, default: '📱' },
  subCategories: { type: Array, default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);