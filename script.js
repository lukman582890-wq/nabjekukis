/**
 * ============================================================================
 * NABJE KUKIS — Konfigurasi Produk, Hampers & Keranjang WhatsApp
 * ============================================================================
 * PANDUAN EDIT NANTI:
 * 1. Untuk mengganti foto produk:
 *    Simpan foto di folder "assets/" (misal: "assets/nastar.jpg"), lalu isi
 *    properti `image: "assets/nastar.jpg"` pada produk yang sesuai di bawah.
 *    Selama `image: ""` (kosong), kartu otomatis menampilkan ilustrasi kue.
 * 2. Untuk mengubah harga atau ukuran toples:
 *    Edit bagian `sizes: [ { label: "...", price: 65000 }, ... ]`
 * ============================================================================
 */

const WHATSAPP_NUMBER = "6287787590666"; // Nomor WA tujuan: 087787590666

// Daftar Ilustrasi SVG Placeholder (Tampil rapi saat foto asli belum dipasang)
const PLACEHOLDER_SVGS = {
  nastar: `
    <svg viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="44" r="24" fill="#F4C466" stroke="#6B3E26" stroke-width="2.5"/>
      <ellipse cx="40" cy="34" rx="13" ry="8" fill="#D98A3C" stroke="#6B3E26" stroke-width="2"/>
      <path d="M40 22 L40 30 M36 25 L44 25" stroke="#4A2816" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="31" cy="48" r="1.8" fill="#B86B38"/>
      <circle cx="48" cy="50" r="1.8" fill="#B86B38"/>
      <circle cx="40" cy="56" r="1.8" fill="#B86B38"/>
    </svg>`,
  kastengel: `
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="20" y="34" width="40" height="18" rx="6" transform="rotate(-12 20 34)" fill="#F3C878" stroke="#6B3E26" stroke-width="2.5"/>
      <rect x="24" y="42" width="40" height="18" rx="6" transform="rotate(8 24 42)" fill="#E7B156" stroke="#6B3E26" stroke-width="2.5"/>
      <path d="M30 44 C34 40, 42 40, 48 45" stroke="#FFF8E7" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M34 50 C40 46, 46 48, 52 52" stroke="#FFF8E7" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  putriSalju: `
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M54 26 A22 22 0 1 0 54 58 A15 15 0 1 1 54 26 Z" fill="#FFFDF9" stroke="#6B3E26" stroke-width="2.5"/>
      <circle cx="30" cy="36" r="2" fill="#A3B899"/>
      <circle cx="26" cy="45" r="2" fill="#A3B899"/>
      <circle cx="34" cy="52" r="2" fill="#A3B899"/>
    </svg>`,
  saguKeju: `
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M40 20 C52 20 62 30 62 42 C62 54 52 62 40 62 C28 62 18 54 18 42 C18 30 28 20 40 20 Z" fill="#FFF6E3" stroke="#6B3E26" stroke-width="2.5"/>
      <path d="M40 28 C48 32 48 48 40 54 C32 48 32 32 40 28 Z" stroke="#D99B4E" stroke-width="2" fill="none"/>
      <circle cx="40" cy="41" r="4" fill="#E6B665"/>
    </svg>`,
  chocoKukis: `
    <svg viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="42" r="24" fill="#D5955B" stroke="#4A2816" stroke-width="2.5"/>
      <circle cx="32" cy="34" r="4" fill="#4A2816"/>
      <circle cx="48" cy="36" r="3.5" fill="#4A2816"/>
      <circle cx="38" cy="46" r="4.2" fill="#4A2816"/>
      <circle cx="29" cy="49" r="3" fill="#4A2816"/>
      <circle cx="49" cy="49" r="3.5" fill="#4A2816"/>
    </svg>`,
  dodol: `
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="18" y="32" width="44" height="22" rx="11" fill="#7A3E1D" stroke="#4A2816" stroke-width="2.5"/>
      <path d="M34 32 L46 32 L44 54 L36 54 Z" fill="#A3B899" stroke="#4A2816" stroke-width="2"/>
      <path d="M26 39 Q40 35 54 39" stroke="#C87D4B" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  wajik: `
    <svg viewBox="0 0 80 80" fill="none">
      <polygon points="40,18 64,34 40,50 16,34" fill="#B86B38" stroke="#4A2816" stroke-width="2.5"/>
      <polygon points="16,34 40,50 40,62 16,46" fill="#8C4A23" stroke="#4A2816" stroke-width="2.5"/>
      <polygon points="64,34 40,50 40,62 64,46" fill="#6B3E26" stroke="#4A2816" stroke-width="2.5"/>
      <path d="M35 28 Q40 23 45 28" stroke="#A3B899" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  getuk: `
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="20" y="24" width="40" height="12" rx="5" fill="#F2C6B6" stroke="#6B3E26" stroke-width="2.2"/>
      <rect x="20" y="36" width="40" height="12" rx="5" fill="#FFFDF9" stroke="#6B3E26" stroke-width="2.2"/>
      <rect x="20" y="48" width="40" height="12" rx="5" fill="#A3B899" stroke="#6B3E26" stroke-width="2.2"/>
      <path d="M32 20 Q40 15 48 20" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
};

// Data Produk (Harga & varian contoh yang siap di-update kapan saja)
const PRODUCTS = [
  {
    id: "nastar-klasik",
    name: "Nastar Klasik Lumer",
    category: "kue-kering",
    categoryLabel: "Kue Kering Lebaran",
    badge: "Best Seller",
    badgeStyle: "badge-gold",
    theme: "theme-butter",
    iconKey: "nastar",
    image: "", // Isi misal "assets/nastar.jpg" jika foto sudah ada
    description: "Adonan lembut beraroma butter pilihan dengan isian selai nanas masak sendiri yang manis-segar dan lumer di mulut.",
    sizes: [
      { label: "Toples 250gr", price: 55000 },
      { label: "Toples 500gr", price: 105000 }
    ]
  },
  {
    id: "kastengel-keju",
    name: "Kastengel Keju Gurih",
    category: "kue-kering",
    categoryLabel: "Kue Kering Lebaran",
    badge: "Favorit",
    badgeStyle: "",
    theme: "theme-butter",
    iconKey: "kastengel",
    image: "",
    description: "Kue kering keju panggang yang renyah dan gurih dengan taburan keju parut melimpah di setiap gigitan.",
    sizes: [
      { label: "Toples 250gr", price: 58000 },
      { label: "Toples 500gr", price: 110000 }
    ]
  },
  {
    id: "putri-salju-pandan",
    name: "Putri Salju Klasik & Pandan",
    category: "kue-kering",
    categoryLabel: "Kue Kering Lebaran",
    badge: "Manis Lembut",
    badgeStyle: "badge-sage",
    theme: "theme-sage",
    iconKey: "putriSalju",
    image: "",
    description: "Kukis bulan sabit yang lembut dengan balutan gula halus dingin yang manis dan aroma vanila/pandan.",
    sizes: [
      { label: "Toples 250gr", price: 50000 },
      { label: "Toples 500gr", price: 95000 }
    ]
  },
  {
    id: "sagu-keju-lumer",
    name: "Sagu Keju Susu",
    category: "kue-kering",
    categoryLabel: "Kue Kering Lebaran",
    badge: "",
    badgeStyle: "",
    theme: "theme-butter",
    iconKey: "saguKeju",
    image: "",
    description: "Tekstur renyah yang langsung lumer di lidah dengan perpaduan santan, daun pandan, dan keju pilihan.",
    sizes: [
      { label: "Toples 250gr", price: 50000 },
      { label: "Toples 500gr", price: 95000 }
    ]
  },
  {
    id: "choco-chip-kukis",
    name: "Nabje Choco Chip Kukis",
    category: "kue-kering",
    categoryLabel: "Kue Kering Lebaran",
    badge: "Signature",
    badgeStyle: "badge-gold",
    theme: "theme-caramel",
    iconKey: "chocoKukis",
    image: "",
    description: "Kukis renyah khas Nabje Kukis dengan cokelat chip melimpah—disukai anak-anak hingga dewasa setiap saat.",
    sizes: [
      { label: "Toples 250gr", price: 48000 },
      { label: "Toples 500gr", price: 90000 }
    ]
  },
  {
    id: "dodol-rumahan",
    name: "Dodol Legit Rumahan",
    category: "jajanan-tradisional",
    categoryLabel: "Jajanan Tradisional",
    badge: "Resep Tradisional",
    badgeStyle: "badge-sage",
    theme: "theme-caramel",
    iconKey: "dodol",
    image: "",
    description: "Dodol manis legit yang dimasak perlahan dengan santan segar dan gula aren pilihan, lembut dan tidak lengket di tangan.",
    sizes: [
      { label: "Kemasan 250gr", price: 35000 },
      { label: "Besek 500gr", price: 65000 },
      { label: "Box 1 Kg", price: 125000 }
    ]
  },
  {
    id: "wajik-ketan",
    name: "Wajik Ketan Gula Aren",
    category: "jajanan-tradisional",
    categoryLabel: "Jajanan Tradisional",
    badge: "Harum Pandan",
    badgeStyle: "badge-sage",
    theme: "theme-sage",
    iconKey: "wajik",
    image: "",
    description: "Beras ketan pilihan yang dikukus bersama santan kental, gula merah asli, dan daun pandan wangi. Cocok untuk hantaran & tamu.",
    sizes: [
      { label: "Box Kecil (10 ptg)", price: 40000 },
      { label: "Besek Sedang (20 ptg)", price: 75000 },
      { label: "Tampah / Hantaran", price: 150000 }
    ]
  },
  {
    id: "getuk-manis",
    name: "Getuk Lindri & Getuk Manis",
    category: "jajanan-tradisional",
    categoryLabel: "Jajanan Tradisional",
    badge: "Fresh Harian",
    badgeStyle: "badge-gold",
    theme: "theme-sage",
    iconKey: "getuk",
    image: "",
    description: "Olahan singkong pilihan yang lembut, pulen, dan manis pas dengan taburan kelapa parut gurih yang dikukus segar.",
    sizes: [
      { label: "Box Personal (8 ptg)", price: 30000 },
      { label: "Box Keluarga (16 ptg)", price: 55000 }
    ]
  }
];

// Data Paket Hampers
const HAMPERS = [
  {
    id: "hampers-silaturahmi",
    name: "Hampers Manis Silaturahmi",
    subtitle: "Bingkisan manis dan ringkas untuk sahabat, tetangga, atau guru.",
    icon: "🎀",
    featured: false,
    ribbon: "",
    price: 115000,
    contents: [
      "2 Toples Kue Kering Pilihan (Ukuran 250gr)",
      "Kemasan Box Cantik Nuansa Krem & Sage",
      "Pita Satin & Kartu Ucapan Personal"
    ]
  },
  {
    id: "hampers-keluarga",
    name: "Hampers Spesial Nabje Kukis",
    subtitle: "Paket paling lengkap yang memadukan kue kering favorit & jajanan tradisional.",
    icon: "🎁",
    featured: true,
    ribbon: "Paling Diminati",
    price: 265000,
    contents: [
      "2 Toples Kue Kering Premium (Ukuran 500gr)",
      "1 Kemasan Dodol Legit / Wajik Ketan Pilihan",
      "Hardbox Eksklusif + Pita Karamel & Kartu Ucapan"
    ]
  },
  {
    id: "hampers-tradisional",
    name: "Hampers Heritage Nusantara",
    subtitle: "Hantaran hangat berisi kelezatan jajanan tradisional untuk orang tua & kerabat.",
    icon: "🌿",
    featured: false,
    ribbon: "Khas Tradisional",
    price: 145000,
    contents: [
      "Dodol Legit Rumahan (500gr)",
      "Wajik Ketan Gula Aren & Getuk Manis",
      "Kemasan Besek Anyaman Pita Sage & Kartu Ucapan"
    ]
  }
];

// State aplikasi
let activeCategory = "semua";
let selectedSizes = {}; // Menyimpan indeks ukuran yang dipilih per produk
let cart = [];

// Format Rupiah
function formatRupiah(amount) {
  return "Rp " + Number(amount).toLocaleString("id-ID");
}

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Set default size index 0 untuk setiap produk
  PRODUCTS.forEach((p) => {
    selectedSizes[p.id] = 0;
  });

  // Muat keranjang dari localStorage bila ada
  try {
    const saved = localStorage.getItem("nabjekukis_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }

  renderProducts();
  renderHampers();
  updateCartUI();
  setupEventListeners();

  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Render Daftar Produk
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered =
    activeCategory === "semua"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeCategory);

  grid.innerHTML = filtered
    .map((product) => {
      const chosenIdx = selectedSizes[product.id] || 0;
      const activeSize = product.sizes[chosenIdx];

      const mediaContent = product.image
        ? `<img src="${product.image}" alt="${product.name}" class="product-photo" loading="lazy" />`
        : `<div class="placeholder-illustration">
             <div class="placeholder-svg-wrap">
               ${PLACEHOLDER_SVGS[product.iconKey] || PLACEHOLDER_SVGS.nastar}
             </div>
             <span class="placeholder-note">Ilustrasi Sajian • Foto Menyusul</span>
           </div>`;

      const badgeHtml = product.badge
        ? `<span class="product-badge ${product.badgeStyle}">${product.badge}</span>`
        : "";

      const sizeButtonsHtml = product.sizes
        .map(
          (sz, idx) => `
          <button
            type="button"
            class="size-pill ${idx === chosenIdx ? "active" : ""}"
            data-product-id="${product.id}"
            data-size-idx="${idx}"
          >
            ${sz.label}
          </button>`
        )
        .join("");

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-media ${product.theme}">
            ${badgeHtml}
            ${mediaContent}
          </div>
          <div class="product-body">
            <span class="product-cat-label">${product.categoryLabel}</span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.description}</p>

            <div class="size-selector-group">
              <span class="size-label">Pilih Ukuran / Kemasan:</span>
              <div class="size-options">
                ${sizeButtonsHtml}
              </div>
            </div>

            <div class="product-footer">
              <div class="price-wrap">
                <span class="price-caption">Harga (${activeSize.label})</span>
                <span class="price-value">${formatRupiah(activeSize.price)}</span>
              </div>
              <div class="card-actions">
                <button
                  type="button"
                  class="btn-add-cart"
                  data-add-product="${product.id}"
                  title="Tambah ke Keranjang"
                >
                  + Keranjang
                </button>
                <button
                  type="button"
                  class="btn-wa-direct"
                  data-direct-product="${product.id}"
                  title="Pesan Langsung via WhatsApp"
                >
                  Pesan WA
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// Render Paket Hampers
function renderHampers() {
  const grid = document.getElementById("hampersGrid");
  if (!grid) return;

  grid.innerHTML = HAMPERS.map((h) => {
    const ribbonHtml = h.ribbon ? `<span class="hamper-ribbon">${h.ribbon}</span>` : "";
    const contentsHtml = h.contents.map((item) => `<li>${item}</li>`).join("");

    return `
      <article class="hamper-card ${h.featured ? "featured" : ""}">
        ${ribbonHtml}
        <div class="hamper-icon-top" aria-hidden="true">${h.icon}</div>
        <h3 class="hamper-title">${h.name}</h3>
        <p class="hamper-subtitle">${h.subtitle}</p>
        <ul class="hamper-contents">
          ${contentsHtml}
        </ul>
        <div class="hamper-bottom">
          <div class="price-wrap">
            <span class="price-caption">Harga Paket</span>
            <span class="price-value">${formatRupiah(h.price)}</span>
          </div>
          <div class="card-actions">
            <button
              type="button"
              class="btn-add-cart"
              data-add-hamper="${h.id}"
            >
              + Keranjang
            </button>
            <button
              type="button"
              class="btn-wa-direct"
              data-direct-hamper="${h.id}"
            >
              Pesan WA
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Tambah Item ke Keranjang
function addToCart({ id, name, variant, price }) {
  const cartKey = `${id}__${variant}`;
  const existing = cart.find((item) => item.cartKey === cartKey);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartKey,
      id,
      name,
      variant,
      price,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✓ "${name} (${variant})" ditambahkan ke keranjang`);
}

// Ubah Jumlah Item di Keranjang
function changeCartQty(cartKey, delta) {
  const idx = cart.findIndex((item) => item.cartKey === cartKey);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("nabjekukis_cart", JSON.stringify(cart));
  } catch (e) {
    // Abaikan jika storage penuh
  }
}

// Perbarui Tampilan Keranjang
function updateCartUI() {
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.textContent = totalQty;

  const floatingBar = document.getElementById("floatingCartBar");
  const floatingCount = document.getElementById("floatingCartCount");
  const floatingTotal = document.getElementById("floatingCartTotal");

  if (floatingBar && floatingCount && floatingTotal) {
    if (totalQty > 0) {
      floatingBar.hidden = false;
      floatingCount.textContent = `${totalQty} sajian dipilih`;
      floatingTotal.textContent = formatRupiah(totalPrice);
    } else {
      floatingBar.hidden = true;
    }
  }

  const container = document.getElementById("cartItemsContainer");
  const customerForm = document.getElementById("cartCustomerForm");
  const grandTotalEl = document.getElementById("cartGrandTotal");

  if (grandTotalEl) {
    grandTotalEl.textContent = formatRupiah(totalPrice);
  }

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🍪</div>
        <p>Keranjang pesananmu masih kosong.</p>
        <p style="font-size:0.82rem; margin-top:4px;">Silakan pilih kue kering, dodol, wajik, getuk, atau paket hampers terlebih dahulu.</p>
      </div>
    `;
    if (customerForm) customerForm.hidden = true;
  } else {
    if (customerForm) customerForm.hidden = false;
    container.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="cart-item-meta">${item.variant}</div>
            <div class="cart-item-price">${formatRupiah(item.price)} × ${item.qty} = ${formatRupiah(item.price * item.qty)}</div>
          </div>
          <div class="cart-qty-controls">
            <button type="button" class="qty-btn" data-qty-key="${item.cartKey}" data-qty-delta="-1" aria-label="Kurangi">−</button>
            <span class="qty-num">${item.qty}</span>
            <button type="button" class="qty-btn" data-qty-key="${item.cartKey}" data-qty-delta="1" aria-label="Tambah">+</button>
          </div>
        </div>
      `
      )
      .join("");
  }
}

// Buka / Tutup Drawer Keranjang
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    backdrop.hidden = false;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    setTimeout(() => {
      backdrop.hidden = true;
    }, 250);
  }
}

// Kirim Pesanan Langsung 1 Produk ke WhatsApp
function sendDirectWhatsApp(name, variant, price) {
  const lines = [
    "Halo *Nabje Kukis* 🍪✨",
    "Saya ingin memesan:",
    "",
    `• *${name}* (${variant}) — ${formatRupiah(price)}`,
    "",
    "Mohon info ketersediaan dan jadwal pengirimannya ya. Terima kasih!"
  ];
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
}

// Checkout Seluruh Isi Keranjang ke WhatsApp
function checkoutCartToWhatsApp() {
  if (cart.length === 0) {
    showToast("Pilih minimal 1 kue terlebih dahulu ya 😊");
    return;
  }

  const nameInput = document.getElementById("customerName");
  const deliveryInput = document.getElementById("customerDelivery");
  const noteInput = document.getElementById("customerNote");

  const customerName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "-";
  const deliveryMethod = deliveryInput ? deliveryInput.value : "-";
  const customerNote = noteInput && noteInput.value.trim() ? noteInput.value.trim() : "-";

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const itemLines = cart.map(
    (item, index) =>
      `${index + 1}. *${item.name}* (${item.variant}) x${item.qty} = ${formatRupiah(item.price * item.qty)}`
  );

  const messageLines = [
    "Halo *Nabje Kukis* 🍪🌿",
    "Saya ingin memesan sajian berikut:",
    "",
    ...itemLines,
    "",
    `*Total Estimasi:* ${formatRupiah(totalPrice)}`,
    "--------------------------------",
    `*Nama Pemesan:* ${customerName}`,
    `*Pengiriman/Ambil:* ${deliveryMethod}`,
    `*Catatan:* ${customerNote}`,
    "",
    "Mohon konfirmasi pesanan saya. Terima kasih!"
  ];

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join("\n"))}`;
  window.open(waUrl, "_blank", "noopener");
}

// Toast Notification
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;

  toast.textContent = message;
  toast.hidden = false;

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2600);
}

// Event Listeners
function setupEventListeners() {
  // Filter Kategori Tab
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeCategory = tab.getAttribute("data-category") || "semua";
      renderProducts();
    });
  });

  // Klik Banner Kategori untuk Loncat & Filter Otomatis
  document.querySelectorAll("[data-filter-jump]").forEach((el) => {
    el.addEventListener("click", () => {
      const targetCat = el.getAttribute("data-filter-jump");
      const matchingTab = document.querySelector(`.filter-tab[data-category="${targetCat}"]`);
      if (matchingTab) {
        matchingTab.click();
      }
      const catalogSection = document.getElementById("katalog");
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Delegasi klik pada Katalog Produk & Hampers
  document.addEventListener("click", (e) => {
    // 1. Pilih Ukuran Toples/Kemasan
    const sizeBtn = e.target.closest(".size-pill");
    if (sizeBtn) {
      const prodId = sizeBtn.getAttribute("data-product-id");
      const sizeIdx = parseInt(sizeBtn.getAttribute("data-size-idx"), 10);
      selectedSizes[prodId] = sizeIdx;
      renderProducts();
      return;
    }

    // 2. Tambah Produk ke Keranjang
    const addProdBtn = e.target.closest("[data-add-product]");
    if (addProdBtn) {
      const prodId = addProdBtn.getAttribute("data-add-product");
      const product = PRODUCTS.find((p) => p.id === prodId);
      if (product) {
        const sizeObj = product.sizes[selectedSizes[prodId] || 0];
        addToCart({
          id: product.id,
          name: product.name,
          variant: sizeObj.label,
          price: sizeObj.price
        });
      }
      return;
    }

    // 3. Pesan Langsung Produk via WA
    const directProdBtn = e.target.closest("[data-direct-product]");
    if (directProdBtn) {
      const prodId = directProdBtn.getAttribute("data-direct-product");
      const product = PRODUCTS.find((p) => p.id === prodId);
      if (product) {
        const sizeObj = product.sizes[selectedSizes[prodId] || 0];
        sendDirectWhatsApp(product.name, sizeObj.label, sizeObj.price);
      }
      return;
    }

    // 4. Tambah Hampers ke Keranjang
    const addHamperBtn = e.target.closest("[data-add-hamper]");
    if (addHamperBtn) {
      const hamperId = addHamperBtn.getAttribute("data-add-hamper");
      const hamper = HAMPERS.find((h) => h.id === hamperId);
      if (hamper) {
        addToCart({
          id: hamper.id,
          name: hamper.name,
          variant: "Paket Hampers",
          price: hamper.price
        });
      }
      return;
    }

    // 5. Pesan Langsung Hampers via WA
    const directHamperBtn = e.target.closest("[data-direct-hamper]");
    if (directHamperBtn) {
      const hamperId = directHamperBtn.getAttribute("data-direct-hamper");
      const hamper = HAMPERS.find((h) => h.id === hamperId);
      if (hamper) {
        sendDirectWhatsApp(hamper.name, "Paket Hampers", hamper.price);
      }
      return;
    }

    // 6. Tombol + / - di dalam Keranjang
    const qtyBtn = e.target.closest("[data-qty-key]");
    if (qtyBtn) {
      const key = qtyBtn.getAttribute("data-qty-key");
      const delta = parseInt(qtyBtn.getAttribute("data-qty-delta"), 10);
      changeCartQty(key, delta);
      return;
    }
  });

  // Buka / Tutup Keranjang
  const openCartBtn = document.getElementById("openCartBtn");
  const floatingOpenCartBtn = document.getElementById("floatingOpenCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const checkoutWaBtn = document.getElementById("checkoutWaBtn");

  if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);
  if (floatingOpenCartBtn) floatingOpenCartBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);
  if (checkoutWaBtn) checkoutWaBtn.addEventListener("click", checkoutCartToWhatsApp);

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
      });
    });
  }
}
