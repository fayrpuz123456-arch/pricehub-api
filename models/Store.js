const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 0 },
  logo: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Store', StoreSchema);