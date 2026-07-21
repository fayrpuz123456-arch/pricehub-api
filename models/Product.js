const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  
  // ✅ الأرقام الكسرية (parseFloat)
  price: { type: Number, required: true },
  oldPrice: { type: Number, default: null },
  discountPercentage: { type: Number, default: 0 },
  
  category: { type: String, required: true },
  subCategory: { type: String, default: '' },
  storeName: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  
  // ✅ الكمية تدعم الكسور برضه
  stock: { type: Number, default: 0 },
  currency: { type: String, default: 'EGP' },
  
  // ✅ وحدة القياس (جديد)
  unit: { 
    type: String, 
    default: 'قطعة',
    enum: ['قطعة', 'كجم', 'جرام', 'لتر', 'مل', 'متر', 'سم', 'حبة', 'علبة', 'زجاجة', 'كيس', 'صندوق', 'طقم', 'أخرى']
  },
  
  // ✅ رابط خارجي لصفحة المنتج (جديد)
  externalLink: { type: String, default: null },
  
  isTrending: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
  isOffer: { type: Boolean, default: false },
  
  whatsapp_number: { type: String, default: null },
  facebook_page: { type: String, default: null },
  contact_email: { type: String, default: null },
  
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);