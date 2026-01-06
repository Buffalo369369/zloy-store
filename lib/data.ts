export type Brand = "hilma" | "driada" | "somatrop" | "marten";

export type Product = {
  slug: string;
  title: string;
  price: number;
  image?: string;
  short?: string;
  description?: string;
  rating?: number;
  category: "hilma" | "driada" | "somatrop" | "marten";
};

// ✅ Hilma (37 товаров) — вставляй сюда свой массив
export const hilmaProducts: Product[] = [
  {
    slug: "Bacteriostatic Water",
    title: "Bacteriostatic Water",
    price: 10,
    image: "/products/hilma/hilma-1.jpg",
    short: "1vial/10 ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Boldenone Undecylenate",
    title: "Boldenone Undecylenate 250",
    price: 45,
    image: "/products/hilma/hilma-2.jpg",
    short: "10 ml / 250 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Drostanolone Enanthate",
    title: "Drostanolone Enanthate 200",
    price: 70,
    image: "/products/hilma/hilma-3.jpg",
    short: "10 ml / 200 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Drostanolone Propionate",
    title: "Drostanolone Propionate 100",
    price: 60,
    image: "/products/hilma/hilma-4.jpg",
    short: "10 ml / 100 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Methenolone Enanthate",
    title: "Methenolone Enanthate 100",
    price: 70,
    image: "/products/hilma/hilma-5.jpg",
    short: "10 ml / 100 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Nandrolone Decanoate",
    title: "Nandrolone Decanoate 250",
    price: 45,
    image: "/products/hilma/hilma-6.jpg",
    short: "10 ml / 250 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Nandrolone Phenylpropionate",
    title: "Nandrolone Phenylpropionate 100",
    price: 35,
    image: "/products/hilma/hilma-7.jpg",
    short: "10 ml / 100 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Parabolan (Trenbolone Hexa)",
    title: "Parabolan (Trenbolone Hexa) 75",
    price: 60,
    image: "/products/hilma/hilma-8.jpg",
    short: "10 ml / 75 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Sustanon (Mix of testosterones",
    title: "Sustanon (Mix of testosterones 250",
    price: 40,
    image: "/products/hilma/hilma-9.jpg",
    short: "10 ml / 250 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Testosterone Enanthate",
    title: "Testosterone Enanthate 250",
    price: 40,
    image: "/products/hilma/hilma-10.jpg",
    short: "10 ml / 250 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },

  // ---------- ORALS ----------
  {
    slug: "Testosterone Cypionate ",
    title: "Testosterone Cypionate 250",
    price: 40,
    image: "/products/hilma/hilma-11.jpg",
    short: "10ml/250 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Testosterone Propionate",
    title: "Testosterone Propionate 100",
    price: 30,
    image: "/products/hilma/hilma-12.jpg",
    short: "10ml/100mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Trenbolone Acetate ",
    title: "Trenbolone Acetate 100",
    price: 50,
    image: "/products/hilma/hilma-13.jpg",
    short: "10ml/100 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Trenbolone Enanthate",
    title: "Trenbolone Enanthate 200",
    price: 60,
    image: "/products/hilma/hilma-14.jpg",
    short: "10ml/200 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Trenbolone Mix ",
    title: "Trenbolone Mix 150",
    price: 65,
    image: "/products/hilma/hilma-15.jpg",
    short: "10ml/150 mg/ml ",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },

  // ---------- PEPTIDES / HGH ----------
  {
    slug: "Stanozolol Injection (ampoules)",
    title: "Stanozolol Injection (ampoules) 50",
    price: 35,
    image: "/products/hilma/hilma-16.jpg",
    short: "10ml/50 mg/m",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Testosterone Undecanoate",
    title: "Testosterone Undecanoate 250",
    price: 45,
    image: "/products/hilma/hilma-17.jpg",
    short: "10ml/250 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },

  // ---------- SUPPORT / PCT ----------
  {
    slug: "Cut Stack (Tren.Ac, Drost.Pr, Test.Pr)",
    title: "Cut Stack (Tren.Ac, Drost.Pr, Test.Pr) 150",
    price: 50,
    image: "/products/hilma/hilma-18.jpg",
    short: "10ml/150mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Mesterolone",
    title: "Mesterolone",
    price: 45,
    image: "/products/hilma/hilma-19.jpg",
    short: "50 tabs / 25 mg",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Methandienone",
    title: "Methandienone",
    price: 35,
    image: "/products/hilma/hilma-20.jpg",
    short: "100tabs /10 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Oxandrolone",
    title: "Oxandrolone",
    price: 60,
    image: "/products/hilma/hilma-21.jpg",
    short: "100tabs /10 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Oxymetholone",
    title: "Oxymetholone",
    price: 60,
    image: "/products/hilma/hilma-22.jpg",
    short: "100tabs /50 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Stanozolol",
    title: "Stanozolol",
    price: 35,
    image: "/products/hilma/hilma-23.jpg",
    short: "100tabs /10 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Turinabol ",
    title: "Turinabol",
    price: 45,
    image: "/products/hilma/hilma-24.jpg",
    short: "10 ml / 100 mg/ml",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Halotestin",
    title: "Halotestin",
    price: 90,
    image: "/products/hilma/hilma-25.jpg",
    short: "100tabs /5 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Primobolan Tablets",
    title: "Primobolan Tablets",
    price: 65,
    image: "/products/hilma/hilma-26.jpg",
    short: "50tabs /25 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Exemestane 250",
    title: "Exemestane 250",
    price: 40,
    image: "/products/hilma/hilma-27.jpg",
    short: "30tabs /25 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Letrozole 25 ",
    title: "Letrozole 25 ",
    price: 40,
    image: "/products/hilma/hilma-28.jpg",
    short: "30tabs /2,5 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },

  // ---------- ORALS ----------
  {
    slug: "Clomiphene citrate ",
    title: "Clomiphene citrate ",
    price: 40,
    image: "/products/hilma/hilma-29.jpg",
    short: "50tabs /50 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Tamoxifen Citrate",
    title: "Tamoxifen Citrate",
    price: 40,
    image: "/products/hilma/hilma-30.jpg",
    short: "50tabs /20 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Anastrozole ",
    title: "Anastrozole ",
    price: 40,
    image: "/products/hilma/hilma-31.jpg",
    short: "50 tabs / 1 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Cabergoline",
    title: "Cabergoline",
    price: 45,
    image: "/products/hilma/hilma-32.jpg",
    short: "10 tabs / 0,25 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Clenbuterol ",
    title: "Clenbuterol ",
    price: 30,
    image: "/products/hilma/hilma-33.jpg",
    short: "50 tabs / 25 mcg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },

  // ---------- PEPTIDES / HGH ----------
  {
    slug: "T3 (Liothyronine Sodium) ",
    title: "T3 (Liothyronine Sodium) ",
    price: 30,
    image: "/products/hilma/hilma-34.jpg",
    short: "50tabs /25 mcg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "T4 (Levothyroxine sodium)",
    title: "T4 (Levothyroxine sodium)",
    price: 30,
    image: "/products/hilma/hilma-35.jpg",
    short: "50tabs /100 mcg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },

  // ---------- SUPPORT / PCT ----------
  {
    slug: "Viagr-ON ",
    title: "Viagr-ON ",
    price: 25,
    image: "/products/hilma/hilma-36.jpg",
    short: "10tabs /100 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },
  {
    slug: "Tadalafil C20 ",
    title: "Tadalafil C20 ",
    price: 25,
    image: "/products/hilma/hilma-37.jpg",
    short: "10tabs /20 mg/tab",
    description: "Описание товара.",
    rating: 5,
    category: "hilma",
  },

];

// ✅ Driada
export const driadaProducts: Product[] = [
 

];

// ✅ Somatrop
export const somatropProducts: Product[] = [
  // ...твои товары
];

// ✅ Marten
export const martenProducts: Product[] = [
  // ...твои товары
];

// ✅ Общий список для магазина (ВАЖНО)
export const products: Product[] = [
  ...hilmaProducts,
  ...driadaProducts,
  ...somatropProducts,
  ...martenProducts,
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts() {
  return products;
}



export function getBrands() {
  return [
    { title: "Hilma Biocare", slug: "hilma" },
    { title: "Driada Medical", slug: "driada" },
    { title: "Somatrop-LAB", slug: "somatrop" },
    { title: "Marten PRO", slug: "marten" },
  ] as const;
}
export type BrandSlug = "hilma" | "driada" | "somatrop" | "marten";

export function isBrandSlug(x: string): x is BrandSlug {
  return x === "hilma" || x === "driada" || x === "somatrop" || x === "marten";
}

export function getProductsByBrand(slug: BrandSlug) {
  return products.filter((p) => p.category === slug);
}