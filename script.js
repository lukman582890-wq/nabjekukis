/**
 * ============================================================================
 * NABJE KUKIS — Script & Data Produk Resmi (Odeholm Layout Structure)
 * ============================================================================
 */

const WHATSAPP_NUMBER = "6287787590666";

// Placeholder SVG jika gambar produk belum ada
const PLACEHOLDER_SVGS = {
  nastar: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="44" r="24" fill="#F4C466" stroke="#6B3E26" stroke-width="2.5"/><ellipse cx="40" cy="34" rx="13" ry="8" fill="#D98A3C" stroke="#6B3E26" stroke-width="2"/><path d="M40 22 L40 30 M36 25 L44 25" stroke="#4A2816" stroke-width="2.5" stroke-linecap="round"/><circle cx="31" cy="48" r="1.8" fill="#B86B38"/><circle cx="48" cy="50" r="1.8" fill="#B86B38"/><circle cx="40" cy="56" r="1.8" fill="#B86B38"/></svg>`,
  kastengel: `<svg viewBox="0 0 80 80" fill="none"><rect x="20" y="34" width="40" height="18" rx="6" transform="rotate(-12 20 34)" fill="#F3C878" stroke="#6B3E26" stroke-width="2.5"/><rect x="24" y="42" width="40" height="18" rx="6" transform="rotate(8 24 42)" fill="#E7B156" stroke="#6B3E26" stroke-width="2.5"/><path d="M30 44 C34 40, 42 40, 48 45" stroke="#FFF8E7" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  choco: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="42" r="24" fill="#D5955B" stroke="#4A2816" stroke-width="2.5"/><circle cx="32" cy="34" r="4" fill="#4A2816"/><circle cx="48" cy="36" r="3.5" fill="#4A2816"/><circle cx="38" cy="46" r="4.2" fill="#4A2816"/><circle cx="29" cy="49" r="3" fill="#4A2816"/></svg>`,
  dodol: `<svg viewBox="0 0 80 80" fill="none"><rect x="18" y="32" width="44" height="22" rx="11" fill="#7A3E1D" stroke="#4A2816" stroke-width="2.5"/><path d="M34 32 L46 32 L44 54 L36 54 Z" fill="#A3B899" stroke="#4A2816" stroke-width="2"/></svg>`,
  wajik: `<svg viewBox="0 0 80 80" fill="none"><polygon points="40,18 64,34 40,50 16,34" fill="#B86B38" stroke="#4A2816" stroke-width="2.5"/><polygon points="16,34 40,50 40,62 16,46" fill="#8C4A23" stroke="#4A2816" stroke-width="2.5"/></svg>`,
  getuk: `<svg viewBox="0 0 80 80" fill="none"><rect x="20" y="24" width="40" height="12" rx="5" fill="#F2C6B6" stroke="#6B3E26" stroke-width="2.2"/><rect x="20" y="36" width="40" height="12" rx="5" fill="#FFFDF9" stroke="#6B3E26" stroke-width="2.2"/><rect x="20" y="48" width="40" height="12" rx="5" fill="#A3B899" stroke="#6B3E26" stroke-width="2.2"/></svg>`
};

// Data Kue Kering (Toples 600ml Tutup Rose Gold)
const COOKIE_PRODUCTS = [
  {
    id: "nastar-klasik",
    name: "Nastar Klasik Lumer",
    category: "nastar",
    badge: "Best Seller",
    price: 90000,
    size: "Toples Tabung 600ml",
    image: "assets/products/nastar-klasik.jpg",
    desc: "Adonan lembut beraroma butter dengan isian selai nanas asli masak sendiri. Nanas adalah koentji!"
  },
  {
    id: "kastengel-cokelat",
    name: "Kastengel Cokelat",
    category: "cokelat",
    badge: "Signature",
    price: 100000,
    size: "Toples Tabung 600ml",
    image: "assets/products/kastengel-cokelat.jpg",
    desc: "Inovasi gurih-manis kastengel cokelat khas Nabje Kukis yang renyah dan cocok untuk teman ngopi."
  },
  {
    id: "choco-almond",
    name: "Choco Almond Kukis",
    category: "cokelat",
    badge: "Renyah Gurih",
    price: 75000,
    size: "Toples Tabung 600ml",
    image: "assets/products/choco-almond.jpg",
    desc: "Paduan cokelat mantap dengan taburan kacang almond renyah berkualitas tinggi di setiap gigitan."
  },
  {
    id: "semprit-cokelat",
    name: "Semprit Cokelat",
    category: "cokelat",
    badge: "Klasik Renyah",
    price: 70000,
    size: "Toples Tabung 600ml",
    image: "assets/products/semprit-cokelat.jpg",
    desc: "Kue semprit bunga cokelat renyah dengan rasa cokelat pekat khas Nabje Kukis berhias chocochip lezat."
  },
  {
    id: "sagu-keju",
    name: "Sagu Keju Susu",
    category: "keju",
    badge: "Lumer di Lidah",
    price: 75000,
    size: "Toples Tabung 600ml",
    image: "assets/products/sagu-keju.jpg",
    desc: "Tekstur renyah lembut yang langsung lumer di lidah berpadu gurihnya keju dan santan segar."
  },
  {
    id: "nastar-gulung",
    name: "Kue Nastar Gulung",
    category: "nastar",
    badge: "Cantik & Legit",
    price: 90000,
    size: "Toples Tabung 600ml",
    image: "assets/products/nastar-gulung.jpg",
    desc: "Varian nastar gulung bertekstur lembut renyah dengan selai nanas legit melimpah di setiap gulungan."
  },
  {
    id: "putri-salju",
    name: "Kue Putri Salju Lembut",
    category: "keju",
    badge: "Dingin Lembut",
    price: 80000,
    size: "Toples Tabung 600ml",
    image: "assets/products/putri-salju.jpg",
    desc: "Kukis putri salju lumer dengan taburan gula halus dingin khas Nabje Kukis yang manis dan lembut."
  }
];

// Data Paket Hampers Idul Fitri (Pemesanan & Harga via WhatsApp)
const HAMPERS_DATA = [
  {
    id: "hampers-eid-emerald",
    name: "Hampers Eid Emerald Floral",
    tagline: "Koleksi Idul Fitri • Hardbox Tenteng Eksklusif",
    badge: "Best Gift Box",
    image: "assets/products/hampers-eid-green.jpg",
    description: "Hardbox tenteng mewah bertema 'Eid Mubarak' dengan aksen floral hijau emerald, pita satin mewah, serta tali jinjing kokoh.",
    features: [
      "Hardbox eksklusif motif floral Idul Fitri dengan handle jinjing",
      "Pita satin emerald mewah & hangtag kartu ucapan Lebaran",
      "Muat toples tabung 600ml kue kering pilihan Nabje Kukis",
      "Kombinasi isi kue bebas pilih sesuai selera"
    ],
    ctaText: "Tanya / Pesan via WA"
  },
  {
    id: "hampers-eid-sage",
    name: "Hampers Eid Sage Bloom",
    tagline: "Koleksi Idul Fitri • Box Jinjing Lily Lembut",
    badge: "Favorit Cantik",
    image: "assets/products/hampers-eid-sage.jpg",
    description: "Kemasan bag box jinjing cantik bergelombang nuansa sage green dengan motif bunga lily dan pita organza emas berkilau.",
    features: [
      "Bag box jinjing cantik bertuliskan 'Minal Aidin Wal Faizin'",
      "Pita organza emas lembut & kartu ucapan personal",
      "Muat toples tabung 600ml kue kering Nabje Kukis",
      "Pilihan manis, ringkas, dan sangat berkesan untuk kerabat"
    ],
    ctaText: "Tanya / Pesan via WA"
  }
];

// Data Jajanan Tradisional
const TRADITIONAL_PRODUCTS = [
  {
    id: "dodol-rumahan",
    name: "Dodol Legit Rumahan",
    badge: "Resep Tradisional",
    description: "Dodol manis legit yang dimasak perlahan dengan santan segar dan gula aren asli. Lembut dan tidak lengket di tangan.",
    iconKey: "dodol",
    sizes: [
      { label: "Kemasan 250gr", price: 35000 },
      { label: "Besek 500gr", price: 65000 },
      { label: "Box 1 Kg", price: 125000 }
    ]
  },
  {
    id: "wajik-ketan",
    name: "Wajik Ketan Gula Aren",
    badge: "Harum Pandan",
    description: "Beras ketan pilihan yang dikukus bersama santan kental, gula merah asli, dan daun pandan wangi.",
    iconKey: "wajik",
    sizes: [
      { label: "Box Kecil (10 ptg)", price: 40000 },
      { label: "Besek Sedang (20 ptg)", price: 75000 },
      { label: "Tampah Hantaran", price: 150000 }
    ]
  },
  {
    id: "getuk-manis",
    name: "Getuk Lindri & Getuk Manis",
    badge: "Fresh Harian",
    description: "Olahan singkong pilihan yang lembut, pulen, dan manis pas dengan taburan kelapa parut gurih yang dikukus segar.",
    iconKey: "getuk",
    sizes: [
      { label: "Box Personal (8 ptg)", price: 30000 },
      { label: "Box Keluarga (16 ptg)", price: 55000 }
    ]
  }
];

// State
let selectedTradSizes = {
  "dodol-rumahan": 0,
  "wajik-ketan": 0,
  "getuk-manis": 0
};
let activeCookieFilter = "all";
let cart = [];

function formatRupiah(amount) {
  return "Rp " + Number(amount).toLocaleString("id-ID");
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    const saved = localStorage.getItem("nabjekukis_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  renderHampersGrid();
  renderCookiesGrid();
  renderTraditionalGrid();
  updateCartUI();
  setupEvents();

  const yr = document.getElementById("currentYear");
  if (yr) yr.textContent = new Date().getFullYear();
});

// 1. Render Hampers (Odeholm Split Feature Cards)
function renderHampersGrid() {
  const container = document.getElementById("hampersGrid");
  if (!container) return;

  container.innerHTML = HAMPERS_DATA.map((h) => {
    const featuresList = h.features.map((f) => `<li>${f}</li>`).join("");

    return `
      <article class="odeholm-hamper-card">
        <div class="hamper-card-media">
          <img src="${h.image}" alt="${h.name}" class="hamper-card-img" loading="lazy" />
          <span class="hamper-badge-pill">${h.badge}</span>
        </div>
        <div class="hamper-card-info">
          <div class="hamper-tagline">${h.tagline}</div>
          <h3 class="hamper-name">${h.name}</h3>
          <p class="hamper-desc">${h.description}</p>
          <ul class="hamper-points">
            ${featuresList}
          </ul>
          <div class="hamper-price-bar">
            <div>
              <span class="hamper-price-label">Harga Paket</span>
              <strong class="hamper-price-tag">Via WhatsApp</strong>
            </div>
            <button type="button" class="btn btn-whatsapp" data-wa-hamper="${h.name}">
              ${h.ctaText} →
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 2. Render Kue Kering Grid (Odeholm Product Cards)
function renderCookiesGrid() {
  const container = document.getElementById("cookiesGrid");
  if (!container) return;

  const filtered = activeCookieFilter === "all"
    ? COOKIE_PRODUCTS
    : COOKIE_PRODUCTS.filter((c) => c.category === activeCookieFilter);

  container.innerHTML = filtered.map((p) => {
    return `
      <article class="odeholm-prod-card" data-prod-id="${p.id}">
        <div class="prod-img-wrap">
          <img src="${p.image}" alt="${p.name} Toples 600ml" class="prod-cover-img" loading="lazy" />
          <span class="prod-badge-tag">${p.badge}</span>
        </div>
        <div class="prod-content">
          <div class="prod-size-indicator">${p.size}</div>
          <h3 class="prod-heading">${p.name}</h3>
          <p class="prod-short-desc">${p.desc}</p>
          <div class="prod-bottom-row">
            <div class="prod-price-col">
              <span class="price-lead">Harga Satuan</span>
              <strong class="prod-price-val">${formatRupiah(p.price)}</strong>
            </div>
            <div class="prod-cta-btns">
              <button type="button" class="btn-cart-icon" data-add-cookie="${p.id}" title="Tambah ke Keranjang">
                + Keranjang
              </button>
              <button type="button" class="btn-wa-compact" data-direct-cookie="${p.id}" title="Pesan Langsung via WA">
                Pesan WA
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 3. Render Jajanan Tradisional Grid
function renderTraditionalGrid() {
  const container = document.getElementById("traditionalGrid");
  if (!container) return;

  container.innerHTML = TRADITIONAL_PRODUCTS.map((t) => {
    const chosenIdx = selectedTradSizes[t.id] || 0;
    const activeSize = t.sizes[chosenIdx];

    const sizeBtns = t.sizes.map((s, idx) => `
      <button type="button" class="size-pill ${idx === chosenIdx ? 'active' : ''}" data-trad-id="${t.id}" data-trad-idx="${idx}">
        ${s.label}
      </button>
    `).join("");

    return `
      <article class="odeholm-prod-card trad-card" data-trad-id="${t.id}">
        <div class="prod-img-wrap trad-img-wrap">
          <div class="trad-svg-box">
            ${PLACEHOLDER_SVGS[t.iconKey] || PLACEHOLDER_SVGS.dodol}
          </div>
          <span class="prod-badge-tag">${t.badge}</span>
        </div>
        <div class="prod-content">
          <div class="prod-size-indicator">Sajian Tradisional Nusantara</div>
          <h3 class="prod-heading">${t.name}</h3>
          <p class="prod-short-desc">${t.description}</p>
          
          <div class="size-selector-group">
            <span class="size-label">Pilih Kemasan:</span>
            <div class="size-options">
              ${sizeBtns}
            </div>
          </div>

          <div class="prod-bottom-row">
            <div class="prod-price-col">
              <span class="price-lead">${activeSize.label}</span>
              <strong class="prod-price-val">${formatRupiah(activeSize.price)}</strong>
            </div>
            <div class="prod-cta-btns">
              <button type="button" class="btn-cart-icon" data-add-trad="${t.id}">
                + Keranjang
              </button>
              <button type="button" class="btn-wa-compact" data-direct-trad="${t.id}">
                Pesan WA
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Cart Logic
function addToCart(item) {
  const key = `${item.id}__${item.variant}`;
  const exist = cart.find((i) => i.cartKey === key);

  if (exist) {
    exist.qty += 1;
  } else {
    cart.push({
      cartKey: key,
      id: item.id,
      name: item.name,
      variant: item.variant,
      price: item.price,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✓ "${item.name}" dimasukkan ke keranjang`);
}

function changeCartQty(cartKey, delta) {
  const idx = cart.findIndex((i) => i.cartKey === cartKey);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);

  saveCart();
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("nabjekukis_cart", JSON.stringify(cart));
  } catch (e) {}
}

function updateCartUI() {
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.textContent = totalQty;

  const container = document.getElementById("cartItemsContainer");
  const form = document.getElementById("cartCustomerForm");
  const grandTotalEl = document.getElementById("cartGrandTotal");

  if (grandTotalEl) grandTotalEl.textContent = formatRupiah(totalPrice);

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🍪</div>
        <p>Keranjang pesananmu masih kosong.</p>
        <p style="font-size:0.82rem; margin-top:4px;">Silakan pilih kue kering toples 600ml atau jajanan tradisional favoritmu.</p>
      </div>
    `;
    if (form) form.hidden = true;
  } else {
    if (form) form.hidden = false;
    container.innerHTML = cart.map((item) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-meta">${item.variant}</div>
          <div class="cart-item-price">${formatRupiah(item.price)} × ${item.qty} = ${formatRupiah(item.price * item.qty)}</div>
        </div>
        <div class="cart-qty-controls">
          <button type="button" class="qty-btn" data-qty-key="${item.cartKey}" data-qty-delta="-1">−</button>
          <span class="qty-num">${item.qty}</span>
          <button type="button" class="qty-btn" data-qty-key="${item.cartKey}" data-qty-delta="1">+</button>
        </div>
      </div>
    `).join("");
  }
}

function openCart() {
  const d = document.getElementById("cartDrawer");
  const b = document.getElementById("cartBackdrop");
  if (d && b) {
    b.hidden = false;
    d.classList.add("open");
  }
}

function closeCart() {
  const d = document.getElementById("cartDrawer");
  const b = document.getElementById("cartBackdrop");
  if (d && b) {
    d.classList.remove("open");
    setTimeout(() => { b.hidden = true; }, 240);
  }
}

function sendDirectWA(name, variant, price) {
  const lines = [
    "Halo *Nabje Kukis* 🍪✨",
    "Saya ingin memesan:",
    "",
    `• *${name}* (${variant}) — ${formatRupiah(price)}`,
    "",
    "Mohon info ketersediaan dan pengirimannya ya. Terima kasih!"
  ];
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
}

function checkoutCartToWA() {
  if (cart.length === 0) {
    showToast("Pilih minimal 1 produk dulu ya 😊");
    return;
  }

  const nameVal = document.getElementById("customerName")?.value.trim() || "-";
  const deliveryVal = document.getElementById("customerDelivery")?.value || "-";
  const noteVal = document.getElementById("customerNote")?.value.trim() || "-";
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const lines = [
    "Halo *Nabje Kukis* 🍪🌿",
    "Saya ingin memesan sajian berikut:",
    "",
    ...cart.map((item, idx) => `${idx + 1}. *${item.name}* (${item.variant}) x${item.qty} = ${formatRupiah(item.price * item.qty)}`),
    "",
    `*Total Estimasi:* ${formatRupiah(totalPrice)}`,
    "--------------------------------",
    `*Nama Pemesan:* ${nameVal}`,
    `*Pengiriman/Ambil:* ${deliveryVal}`,
    `*Catatan:* ${noteVal}`,
    "",
    "Mohon konfirmasi pesanan saya. Terima kasih!"
  ];

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
}

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toastNotification");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2500);
}

function setupEvents() {
  // Filter Button Kue Kering
  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCookieFilter = btn.getAttribute("data-filter") || "all";
      renderCookiesGrid();
    });
  });

  // Global Click Delegations
  document.addEventListener("click", (e) => {
    // 1. Add Cookie to Cart
    const addCookie = e.target.closest("[data-add-cookie]");
    if (addCookie) {
      const id = addCookie.getAttribute("data-add-cookie");
      const prod = COOKIE_PRODUCTS.find((c) => c.id === id);
      if (prod) addToCart({ id: prod.id, name: prod.name, variant: prod.size, price: prod.price });
      return;
    }

    // 2. Direct WA Cookie
    const directCookie = e.target.closest("[data-direct-cookie]");
    if (directCookie) {
      const id = directCookie.getAttribute("data-direct-cookie");
      const prod = COOKIE_PRODUCTS.find((c) => c.id === id);
      if (prod) sendDirectWA(prod.name, prod.size, prod.price);
      return;
    }

    // 3. Spotlight Action
    const addProd = e.target.closest("[data-add-product]");
    if (addProd) {
      const id = addProd.getAttribute("data-add-product");
      const prod = COOKIE_PRODUCTS.find((c) => c.id === id);
      if (prod) addToCart({ id: prod.id, name: prod.name, variant: prod.size, price: prod.price });
      return;
    }
    const directProd = e.target.closest("[data-direct-product]");
    if (directProd) {
      const id = directProd.getAttribute("data-direct-product");
      const prod = COOKIE_PRODUCTS.find((c) => c.id === id);
      if (prod) sendDirectWA(prod.name, prod.size, prod.price);
      return;
    }

    // 4. Hampers Direct WA
    const waHamper = e.target.closest("[data-wa-hamper]");
    if (waHamper) {
      const name = waHamper.getAttribute("data-wa-hamper");
      const msg = `Halo *Nabje Kukis* 🎁✨\nSaya tertarik dengan *${name}*.\nBoleh info pilihan isi kue toples 600ml dan harganya? Terima kasih!`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      return;
    }

    // 5. Select Traditional Packaging
    const tradPill = e.target.closest("[data-trad-id]");
    if (tradPill && e.target.classList.contains("size-pill")) {
      const tradId = tradPill.getAttribute("data-trad-id");
      const idx = parseInt(e.target.getAttribute("data-trad-idx"), 10);
      selectedTradSizes[tradId] = idx;
      renderTraditionalGrid();
      return;
    }

    // 6. Add Traditional to Cart
    const addTrad = e.target.closest("[data-add-trad]");
    if (addTrad) {
      const id = addTrad.getAttribute("data-add-trad");
      const item = TRADITIONAL_PRODUCTS.find((t) => t.id === id);
      if (item) {
        const chosen = item.sizes[selectedTradSizes[id] || 0];
        addToCart({ id: item.id, name: item.name, variant: chosen.label, price: chosen.price });
      }
      return;
    }

    // 7. Direct WA Traditional
    const directTrad = e.target.closest("[data-direct-trad]");
    if (directTrad) {
      const id = directTrad.getAttribute("data-direct-trad");
      const item = TRADITIONAL_PRODUCTS.find((t) => t.id === id);
      if (item) {
        const chosen = item.sizes[selectedTradSizes[id] || 0];
        sendDirectWA(item.name, chosen.label, chosen.price);
      }
      return;
    }

    // 8. Cart Qty
    const qtyBtn = e.target.closest("[data-qty-key]");
    if (qtyBtn) {
      const k = qtyBtn.getAttribute("data-qty-key");
      const delta = parseInt(qtyBtn.getAttribute("data-qty-delta"), 10);
      changeCartQty(k, delta);
      return;
    }
  });

  // Cart Open/Close
  document.getElementById("openCartBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
  document.getElementById("cartBackdrop")?.addEventListener("click", closeCart);
  document.getElementById("checkoutWaBtn")?.addEventListener("click", checkoutCartToWA);

  // Mobile Nav Toggle
  const mobBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("headerNav");
  if (mobBtn && nav) {
    mobBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }
}
