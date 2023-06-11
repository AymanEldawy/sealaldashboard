export const menu = [
  {
    id: 1,
    name: "Product",
    link: "#",
    children: [
      { name: 'All_products', link: '/products' },
      { name: 'Create_Single', link: '/add-product' },
      { name: 'Product_Commission_Tariffs', link: '/product-commission' },
    ]
  },
  {
    id: 2,
    name: "Order_shipping",
    link: "#",
    children: [
      { name: 'Orders', link: '/orders' },
      { name: 'Canceled_Orders', link: '/canceled-orders' },
      { name: 'Create_Discount', link: '/create-discount' },
      { name: 'Returns_Processes', link: '/returns-process' },
      { name: 'Flash_Prices', link: '/flash-prices' },
    ]
  },
  {
    id: 3,
    name: "Finance",
    link: "/categories",
    children: [
      { name: 'Document_Transactions', link: '/document-transactions' },
      { name: 'Cargo_Transactions', link: '/cargo-transactions' },
      { name: 'Invoice_Listing', link: '/invoice-listing' },
      { name: 'Payment_History', link: '/payment-history' },
      { name: 'Payments', link: '/payments' },
    ]
  },
  {
    id: 4,
    name: "Promotion_Price",
    link: "/sale",
    children: [
      {name:'Promotion_Price', link: 'promotion'},
      {name:'My_coupons', link: 'my-coupons'},
    ]
  },
  {
    id: 5, name: "Store_Management", link: "/companies", children: [
      { name: 'Daily_Records', link: '/daily-records' },
      { name: 'My_Sealal_Invoice', link: '/sealal-Invoice' },
    ]
  },
  {
    id: 6, name: "Advertising_Management", link: "/contact-us", children: [
      { name: 'Current_account_statement', link: '/account-statement' },
      { name: 'Campaigns', link: '/campaigns' },
    ]
  },
];
