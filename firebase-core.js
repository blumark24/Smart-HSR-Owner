// =======================
// 🔥 Smart HSR Owner Core
// =======================

// استيراد مكتبات Firebase (الإصدار 11.0.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { 
  getFirestore 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// استيراد إعدادات مشروعك من firebase-config.js
import { firebaseConfig } from "./firebase-config.js";

// تهيئة تطبيق Firebase
export const app = initializeApp(firebaseConfig);

// تهيئة خدمات Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);

// تفعيل بقاء جلسة المستخدم حتى بعد إغلاق المتصفح
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("✅ Session persistence enabled successfully");
  })
  .catch((error) => {
    console.error("⚠️ Error setting persistence:", error);
  });
