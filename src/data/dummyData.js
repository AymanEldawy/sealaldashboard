import { AirConIcon, FriggedIcon, GasIcon, MicrowavesIcon, OthersIcon, OvensIcon } from "@/components/Icons";

const getRandomOf = (list) => {
  return Math.floor(Math.random() * list?.length);
};

export const getItemById = (list, itemId) => {
  return list?.find((item) => +item?.id === +itemId);
};
export const getOfferById = (list, itemId) => {
  console.log(list, itemId);
  return list?.find((item) => +item?.offerNumber === +itemId);
};
export const links = [
  { name: "home", link: "/" },
  { name: "about_us", link: "/about-us" },
  { name: "categories", link: "/categories" },
  { name: "sale", link: "/sale" },
  { name: "companies", link: "/companies" },
  { name: "contact_us", link: "/contact-us" },
];


export const categories = [
  "Best Seller Products",
  "Woman",
  "Male",
  "Mother & child",
  "Supermarket",
  "Cosmetic",
  "Shoes & Bags",
  "Watches & Accessories",
  "Electronics",
  "Devices",
  "Toys & Hobbies",
  "Heath & Beauty",
  "Back to school",
  "Others",

]

export const products = [

  {
    id: 'Product X',
    "name": "Product X",
    "description": "This is a great product that will meet all of your needs!",
    "status": true,
    image:'/images/products/1.png',
    "price": 25,
    "rating": 4,
    "favorite": false,
    "discount": 0.15,
    "company_name": "ABC Inc.",
    "delivery_time": "2-3 Delivery days"
  },
  {
    id: 'Product Y',
    "name": "Product Y",
    "description": "This is another great product that will meet all of your needs!",
    "status": false,
    image:'/images/products/1.png',
    "price": 20,
    "rating": 3,
    "favorite": true,
    "discount": 0.10,
    "company_name": "XYZ Corp.",
    "delivery_time": "3-5 Delivery days"
  },
  {
    id: 'Product Z',
    "name": "Product Z",
    "description": "This is an amazing product that you won't want to miss out on!",
    "status": true,
    image:'/images/products/1.png',
    "price": 39,
    "rating": 5,
    "favorite": true,
    "discount": 0.25,
    "company_name": "ACME Inc.",
    "delivery_time": "1-2 Delivery days"
  },
  {
    id: 'Product A',
    "name": "Product A",
    "description": "This product is perfect for those who need a reliable solution!",
    "status": true,
    image:'/images/products/1.png',
    "price": 15,
    "rating": 4,
    "favorite": false,
    "discount": 0.05,
    "company_name": "DEF Corp.",
    "delivery_time": "4-6 Delivery days"
  },
  {
    id: 'Product B',
    "name": "Product B",
    "description": "This is a high-quality product that will exceed your expectations!",
    "status": false,
    image:'/images/products/1.png',
    "price": 29,
    "rating": 3,
    "favorite": false,
    "discount": 0.20,
    "company_name": "GHI Inc.",
    "delivery_time": "2-4 Delivery days"
  },
  {
    id: 'Product C',
    "name": "Product C",
    "description": "This product is designed to make your life easier and more enjoyable!",
    "status": true,
    image:'/images/products/1.png',
    "price": 50,
    "rating": 5,
    "favorite": true,
    "discount": 0.30,
    "company_name": "JKL Corp.",
    "delivery_time": "1-3 Delivery days"
  },
  {
    id: 'Product D',
    "name": "Product D",
    "description": "This is a versatile product that can be used in many different ways!",
    "status": true,
    image:'/images/products/1.png',
    "price": 19,
    "rating": 3,
    "favorite": false,
    "discount": 0.10,
    "company_name": "MNO Inc.",
    "delivery_time": "3-5 Delivery days"
  },
  {
    id: 'Product E',
    "name": "Product E",
    "description": "This product is perfect for those who demand the best!",
    "status": true,
    image:'/images/products/1.png',
    "price": 99,
    "rating": 5,
    "favorite": true,
    "discount": 0.40,
    "company_name": "PQR Corp.",
    "delivery_time": "1-2 Delivery days"
  },
  {
    id: 'Product F',
    "name": "Product F",
    "description": "This is a reliable product that you can count on!",
    "status": false,
    image:'/images/products/1.png',
    "price": 24,
    "rating": 4,
    "favorite": false,
    "discount": 0.15,
    "company_name": "STU Inc.",
    "delivery_time": "2-4 Delivery days"
  },
  {
    id: 'Product G',
    "name": "Product G",
    "description": "This product is perfect for those who need a powerful solution!",
    "status": true,
    image:'/images/products/1.png',
    "price": 69,
    "rating": 5,
    "favorite": true,
    "discount": 0.35,
    "company_name": "VWX Corp.",
    "delivery_time": "1-3 Delivery days"
  },
  {
    id: 'Product H',
    "name": "Product H",
    "description": "This is a high-performance product that won't let you down!",
    "status": true,
    image:'/images/products/1.png',
    "price": 39,
    "rating": 4,
    "favorite": false,
    "discount": 0.20,
    "company_name": "YZA Inc.",
    "delivery_time": "3-5 Delivery days"
  },
  {
    id: 'Product I',
    "name": "Product I",
    "description": "This product is perfect for those who demand the best!",
    "status": true,
    image:'/images/products/1.png',
    "price": 99,
    "rating": 5,
    "favorite": true,
    "discount": 0.40,
    "company_name": "BCD Corp.",
    "delivery_time": "1-2 Delivery days"
  },
  {
    id: 'Product J',
    "name": "Product J",
    "description": "This is a versatile product that can be used in many different ways!",
    "status": true,
    image:'/images/products/1.png',
    "price": 19,
    "rating": 3,
    "favorite": false,
    "discount": 0.10,
    "company_name": "EFG Inc.",
    "delivery_time": "3-5 Delivery days"
  },
  {
    id: 'Product K',
    "name": "Product K",
    "description": "This product is perfect for those who need a reliable solution!",
    "status": true,
    image:'/images/products/1.png',
    "price": 15,
    "rating": 4,
    "favorite": false,
    "discount": 0.05,
    "company_name": "HIJ Corp.",
    "delivery_time": "4-6 Delivery days"
  },
  {
    id: 'Product L',
    "name": "Product L",
    "description": "This is a high-quality product that will exceed your expectations!",
    "status": false,
    image:'/images/products/1.png',
    "price": 29,
    "rating": 3,
    "favorite": false,
    "discount": 0.20,
    "company_name": "KLM Inc.",
    "delivery_time": "2-4 Delivery days"
  },
  {
    id: 'Product M',
    "name": "Product M",
    "description": "This product is designed to make your life easier and more enjoyable!",
    "status": true,
    image:'/images/products/1.png',
    "price": 50,
    "rating": 5,
    "favorite": true,
    "discount": 0.30,
    "company_name": "NOP Corp.",
    "delivery_time": "1-3 Delivery days"
  },
  {
    id: 'Product N',
    "name": "Product N",
    "description": "This is a reliable product that you can count on!",
    "status": false,
    image:'/images/products/1.png',
    "price": 24,
    "rating": 4,
    "favorite": false,
    "discount": 0.15,
    "company_name": "QRS Inc.",
    "delivery_time": "2-4 Delivery days"
  }
]