# 🛍️ Product App

เว็บแอปพลิเคชันแสดงรายการสินค้า (Product List) และรายละเอียดสินค้า (Product Detail)  
พัฒนาด้วย Next.js (App Router) + Tailwind CSS + shadcn/ui + MUI + lucide-react

---

## 🚀 Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Material UI (MUI)
- lucide-react
- Fetch API

---

# 📦 Features

- แสดงรายการสินค้า (Product List)
- แสดงรายละเอียดสินค้า (Product Detail)
- Responsive Design
- ใช้ Next.js API Route เป็น Proxy Layer
- Loading และ Error Handling เบื้องต้น

---

# 🏗️ Architecture Overview

โปรเจคนี้ใช้ **Proxy Pattern** โดยให้ Next.js API Route ทำหน้าที่เป็นตัวกลางระหว่าง Client และ External API

## 🔁 Data Flow

```
Browser (Client)
      ↓
Next.js API Route (/api/products)
      ↓
External API (dummyjson.com)
      ↓
Response กลับไป Client
```

---

# 🔁 Proxy Pattern Concept

แทนที่ Client จะเรียก API ตรง:

```ts
fetch("https://dummyjson.com/products")
```

ให้ Client เรียก:

```ts
fetch("/api/products")
```

แล้ว API Route จะเป็นตัว fetch ไปที่ external API อีกที

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Rinnnee/product-listing-app.git
cd product-listing-app
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

สร้างไฟล์ `.env.local`

```
BACKEND_URL=https://dummyjson.com
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

เปิดที่:

```
http://localhost:3000
```

---

# 🌐 API Endpoints

## Get All Products

```
GET /api/products
```

## Get Product By ID

```
GET /api/products/[id]
```

---

# 🎨 UI Libraries

## Tailwind CSS
ใช้จัด Layout และ Responsive

## shadcn/ui
ใช้สำหรับ UI Components เช่น Card, Button

## MUI
ใช้สำหรับ Rating Component

## lucide-react
ใช้สำหรับไอคอน เช่น ArrowLeft

---

# 📜 Available Scripts

```bash
npm run dev       # Run development
npm run build     # Build production
npm run start     # Start production server
npm run lint      # Run ESLint
```




