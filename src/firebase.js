// 从 SDK 中导入需要的函数
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// 你的 Web 应用的 Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyDY2mDaBKT8QD-EpSecc7RSwtXchh_vD-w",
  authDomain: "my-react-app-f8c6a.firebaseapp.com",
  projectId: "my-react-app-f8c6a",
  storageBucket: "my-react-app-f8c6a.firebasestorage.app",
  messagingSenderId: "230055624475",
  appId: "1:230055624475:web:31206f14afba9f04de9dbe"
}

// 初始化 Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
