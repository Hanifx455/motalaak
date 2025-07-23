// استيراد المكتبات اللازمة
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// استيراد المسارات
const userRoutes = require('./routes/userRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

// تهيئة متغيرات البيئة
dotenv.config();

// إنشاء تطبيق Express
const app = express();

// الإعدادات الأساسية
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// رسالة الترحيب
app.get('/', (req, res) => {
  res.json({ message: 'مرحباً بك في واجهة برمجة تطبيق المتألق في التعليم' });
});

// استخدام المسارات
app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// تحديد المنفذ
const PORT = process.env.PORT || 5000;

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});

// اتصال بقاعدة البيانات (معطل حالياً حتى يتم إعداد قاعدة البيانات)
/*
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('تم الاتصال بقاعدة البيانات بنجاح');
})
.catch((err) => {
  console.error('خطأ في الاتصال بقاعدة البيانات:', err);
  process.exit(1);
});
*/

// تعريف نماذج البيانات (سيتم تطويرها لاحقاً)

// تعريف المسارات (سيتم تطويرها لاحقاً)

// معالجة الأخطاء
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'حدث خطأ في الخادم' });
});

// معالجة المسارات غير الموجودة
app.use((req, res) => {
  res.status(404).json({ message: 'المسار غير موجود' });
});