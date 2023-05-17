import { AirConIcon, FriggedIcon, GasIcon, MicrowavesIcon, OthersIcon, OvensIcon } from "@/components/Icons";

const getRandomOf = (list) => {
  return Math.floor(Math.random() * list?.length);
};

export const getItemById = (list, itemId) => {
  console.log(list, itemId)
  return list?.find((item) => item?.id === itemId);
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
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
    image: '/images/products/1.png',
    "price": 24,
    "rating": 4,
    "favorite": false,
    "discount": 0.15,
    "company_name": "QRS Inc.",
    "delivery_time": "2-4 Delivery days"
  }
]


// ]Institutional
// categories
// Popular Brands
// Popular Phones
// Lorem ipsum, or lipsum as it is sometimes known, is
//  dummy text used in laying out print, graphic or web 
// designs. The passage is attributed to an unknown 
// typesetter in the 15th century 
export const institutional = [
  { name: "about us", link: '' },
  { name: "Vision mission", link: '' },
  { name: "Management", link: '' },
  { name: "Corporate Social Responsibility", link: '' },
  { name: "Our Business Partners", link: '' },
  { name: "I want to be a supplier", link: '' },
  { name: "I Want To Be A Delivery Point", link: '' },
  { name: "Become a Seller on Hepsiburada", link: '' },
  { name: "Investor relations", link: '' },
  { name: "solution center", link: '' },
  { name: "News From Us", link: '' },
]

export const footerCategories = [

  { name: "Computer / Electronics", link: "" },
  { name: "Phone Prices / Mobile Phone", link: "" },
  { name: "White Goods / Kitchen", link: "" },
  { name: "Photvo / Camera", link: "" },
  { name: "Sports / Outdoor", link: "" },
  { name: "Clothing / Shoes", link: "" },
  { name: "Jewelry / Jewelery", link: "" },
  { name: "Watch / Glasses / Accessories", link: "" },
  { name: "Cosmetics / Personal Care", link: "" },
  { name: "Mother & Baby", link: "" },
  { name: "Toy", link: "" },
  { name: "Book / Movie / Music", link: "" },
  { name: "Hobby / Game Console", link: "" },
  { name: "Stationery / Office", link: "" },
  { name: "Auto Accessories / Garden", link: "" },
  { name: "Winter Tire", link: "" },
  { name: "Home Decoration / Furniture", link: "" },
  { name: "Pet Shop / Supermarket", link: "" },
  { name: "Wallpaper / Calculator", link: "" },
]

export const popularBrands = [

  { name: "Avon", link: "" },
  { name: "Samsung", link: "" },
  { name: "adidas", link: "" },
  { name: "Nike", link: "" },
  { name: "apple", link: "" },
  { name: "Vestel", link: "" },
  { name: "Bosch", link: "" },
  { name: "New Balance", link: "" },
  { name: "defacto", link: "" },
  { name: "Lacoste", link: "" },
  { name: "Asus", link: "" },
  { name: "Lego", link: "" },
  { name: "Boyner", link: "" },
  { name: "Cotton", link: "" },
  { name: "Fairy", link: "" },
  { name: "Blue", link: "" },
  { name: "Under Armor", link: "" },
  { name: "wasa", link: "" },
  { name: "All Brands", link: "" },
]

export const popularPhones = [

  { name: "iPhone iOS Phones", link: "" },
  { name: "Samsung Android Phones", link: "" },
  { name: "Xiaomi Android Phones", link: "" },
  { name: "iPhone SE", link: "" },
  { name: "iPhone 14", link: "" },
  { name: "iPhone 12 ", link: "" },
  { name: "iPhone 11 ", link: "" },
  { name: "Watch 7", link: "" },
  { name: "iPhone 13", link: "" },
  { name: "Galaxy Note ", link: "" },
  { name: "S20 / S20 Plus / S20 Ultra", link: "" },
]

export const footerAllHere = [
  { name: "My User Information", link: "" },
  { name: "Trading Guide", link: "" },
  { name: "Twitter Support", link: "" },
  { name: "Mobile Apps", link: "" },
  { name: "Safe Shopping Guide", link: "" },
  { name: "Information h Policy", link: "" },
  { name: "E - commerce Advertising", link: "" },
]


export const colors = [
  { src: "/images/products/1.png", name: "red", "color": "#e6194b", "id": 1 },
  { src: "/images/products/2.png", name: "green", "color": "#3cb44b", "id": 2 },
  { src: "/images/products/3.png", name: "yellow", "color": "#ffe119", "id": 3 },
  { src: "/images/products/4.png", name: "blue", "color": "#0082c8", "id": 4 },
  { src: "/images/products/5.png", name: "orange", "color": "#f58231", "id": 5 },
  { src: "/images/products/6.png", name: "purple", "color": "#911eb4", "id": 6 },
  { src: "/images/products/1.png", name: "cyan", "color": "#46f0f0", "id": 7 },
  { src: "/images/products/2.png", name: "pink", "color": "#f032e6", "id": 8 },
  { src: "/images/products/3.png", name: "Green Yellow", "color": "#d2f53c", "id": 9 },
  { src: "/images/products/4.png", name: "light pink", "color": "#fabebe", "id": 10 }
]


export const sizes = [
  { "size": "M", "id": 1 },
  { "size": "S", "id": 2 },
  { "size": "L", "id": 3 },
  { "size": "XL", "id": 4 },
  { "size": "M", "id": 5 },
  { "size": "S", "id": 6 },
  { "size": "L", "id": 7 },
  { "size": "M", "id": 8 },
  { "size": "XL", "id": 9 },
  { "size": "S", "id": 10 }
]

export const brands = [
  { "brand": "Nike", "id": 1, count: Math.floor(Math.random() * 200) },
  { "brand": "Adidas", "id": 2, count: Math.floor(Math.random() * 200) },
  { "brand": "Levi's", "id": 3, count: Math.floor(Math.random() * 200) },
  { "brand": "H&M", "id": 4, count: Math.floor(Math.random() * 200) },
  { "brand": "Zara", "id": 5, count: Math.floor(Math.random() * 200) },
  { "brand": "Gucci", "id": 6, count: Math.floor(Math.random() * 200) },
  { "brand": "Chanel", "id": 7, count: Math.floor(Math.random() * 200) },
  { "brand": "Calvin Klein", "id": 8, count: Math.floor(Math.random() * 200) },
  { "brand": "Ralph Lauren", "id": 9, count: Math.floor(Math.random() * 200) },
  { "brand": "Tommy Hilfiger", "id": 10, count: Math.floor(Math.random() * 200) }
]

export const suggestionsKeywords = [
  { "keyword": "Nike", "id": 1 },
  { "keyword": "Adidas", "id": 2 },
  { "keyword": "Levi's", "id": 3 },
  { "keyword": "H&M", "id": 4 },
  { "keyword": "Zara", "id": 5 },
  { "keyword": "Gucci", "id": 6 },
  { "keyword": "Chanel", "id": 7 },
  { "keyword": "Calvin Klein", "id": 8 },
  { "keyword": "Ralph Lauren", "id": 9 },
  { "keyword": "Tommy Hilfiger", "id": 10 },
  { "keyword": "Samsung", "id": 11 },
  { "keyword": "Apple", "id": 12 },
  { "keyword": "Google", "id": 13 },
  { "keyword": "LG", "id": 14 },
  { "keyword": "Motorola", "id": 15 },
  { "keyword": "OnePlus", "id": 16 },
  { "keyword": "Sony", "id": 17 },
  { "keyword": "Xiaomi", "id": 18 },
  { "keyword": "Nokia", "id": 19 },
  { "keyword": "HTC", "id": 20 }
]

export const productImages = [
  { id: 1, src: '/images/products/1.png' },
  { id: 2, src: '/images/products/2.png' },
  { id: 3, src: '/images/products/3.png' },
  { id: 4, src: '/images/products/4.png' },
  { id: 5, src: '/images/products/5.png' },
  { id: 6, src: '/images/products/6.png' },

]


export const reviews = [
  {
    id: 1,
    name: "John Smith",
    image: "/images/clients/Ellipse 182.png",
    date: "2023-04-08",
    rating: 4,
    comment: "Great product, works as advertised!",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "/images/clients/Group 3.png",
    date: "2023-04-07",
    rating: 2,
    comment: "This product did not meet my expectations.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    image: "/images/clients/Ellipse 180.png",
    date: "2023-04-05",
    rating: 5,
    comment: "I am very happy with my purchase!",
  },
];


export const sizeChart = [
  {
    "size_name": "XS",
    "measurements": {
      "shoulder": "14",
      "length": "22",
      "sleeve_length": "23",
      "bust": "32",
      "waist_size": "26",
      "cuff": "8",
      "bicep_length": "11"
    }
  },
  {
    "size_name": "S",
    "measurements": {
      "shoulder": "15",
      "length": "23",
      "sleeve_length": "24",
      "bust": "34",
      "waist_size": "28",
      "cuff": "8.5",
      "bicep_length": "11.5"
    }
  },
  {
    "size_name": "M",
    "measurements": {
      "shoulder": "16",
      "length": "24",
      "sleeve_length": "25",
      "bust": "36",
      "waist_size": "30",
      "cuff": "9",
      "bicep_length": "12"
    }
  },
  {
    "size_name": "L",
    "measurements": {
      "shoulder": "17",
      "length": "25",
      "sleeve_length": "26",
      "bust": "38",
      "waist_size": "32",
      "cuff": "9.5",
      "bicep_length": "12.5"
    }
  },
  {
    "size_name": "XL",
    "measurements": {
      "shoulder": "18",
      "length": "26",
      "sleeve_length": "27",
      "bust": "40",
      "waist_size": "34",
      "cuff": "10",
      "bicep_length": "13"
    }
  }
]


export const phoneChart = [
  {
    "name": "Warranty Type",
    "value": "Apple Turkey Guaranteed"
  },
  {
    "name": "RAM Capacity",
    "value": "4GB"
  },
  {
    "name": "Battery Power (mAh)",
    "value": "3000 - 4000"
  },
  {
    "name": "Camera Resolution",
    "value": "10 - 15MP"
  },
  {
    "name": "Display Technology",
    "value": "LCD"
  },
  {
    "name": "Mobile Phone Model",
    "value": "iphone 11"
  },
  {
    "name": "Display Type",
    "value": "OLED"
  },
  {
    "name": "Touch screen",
    "value": "There is"
  },
  {
    "name": "Main Camera Flash",
    "value": "There is"
  },
  {
    "name": "Front Camera Resolution Range",
    "value": "10 - 15MP"
  },
  {
    "name": "OS",
    "value": "iOS"
  },
  {
    "name": "Colour",
    "value": "Red"
  },
  {
    "name": "Headphone jack",
    "value": "lightning"
  },
  {
    "name": "Charge Input",
    "value": "lightning"
  },
  {
    "name": "Wireless charging",
    "value": "No"
  }
]
