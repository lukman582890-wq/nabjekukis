# 🍪 Nabje Kukis — Kue Kering Rumahan & Jajanan Tradisional

Website katalog dan pemesanan WhatsApp untuk **Nabje Kukis**, dirancang dengan nuansa hangat, manis, dan *homey* (perpaduan warna krem hangat, cokelat karamel, dan hijau sage pastel).

## ✨ Fitur Utama
- **Hero & Branding Vintage Bakery:** Menampilkan logo resmi **Nabje Kukis** dengan tombol cepat ke WhatsApp (`0877-8759-0666`).
- **2 Kategori Utama:**
  - **Kue Kering Lebaran & Harian:** Nastar Klasik, Kastengel Keju, Putri Salju, Sagu Keju, dan Choco Chip Kukis.
  - **Jajanan Tradisional:** Dodol Legit Rumahan, Wajik Ketan Gula Aren, dan Getuk Manis.
- **Pilihan Ukuran Toples / Kemasan Interaktif:** Harga otomatis berubah saat pembeli memilih ukuran (misal: Toples 250gr vs 500gr, atau Besek/Box).
- **Placeholder Ilustrasi Kue Rapi:** Setiap kartu produk memiliki ilustrasi SVG khusus yang tampil cantik sebelum foto asli dipasang.
- **Keranjang Pesanan + Direct WhatsApp:** Pembeli bisa memilih beberapa jenis kue sekaligus di Keranjang lalu mengirim rangkuman pesanan otomatis ke WhatsApp, atau langsung klik **Pesan WA** di setiap kartu.

## 🛠️ Cara Mengganti Foto Produk & Harga Nanti
Buka file [`script.js`](./script.js) pada bagian `const PRODUCTS = [...]`:
1. **Memasang Foto Asli:**
   - Masukkan file foto ke folder `assets/` (misalnya `assets/nastar.jpg`).
   - Ubah baris `image: ""` menjadi `image: "assets/nastar.jpg"`.
2. **Mengubah Harga & Ukuran:**
   - Ubah bagian `sizes`:
     ```js
     sizes: [
       { label: "Toples 250gr", price: 55000 },
       { label: "Toples 500gr", price: 105000 }
     ]
     ```
