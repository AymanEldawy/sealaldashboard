import { AirConIcon, FriggedIcon, GasIcon, MicrowavesIcon, OthersIcon, OvensIcon } from "@/components/Icons";

export const links = [
  {
    id: 1,
    name: "Product",
    link: "/",
    children: [
      { name: 'Sub item', link: '/' },
      { name: 'Sub item', link: '/' },
    ]
  },
  {
    id: 2,
    name: "Order_shipping",
    link: "/about-us",
    children: [
      { name: 'Sub item', link: '/' },
      { name: 'Sub item', link: '/' },
    ]
  },
  {
    id: 3,
    name: "Finance",
    link: "/categories",
    children: [
      { name: 'Sub item', link: '/' },
      { name: 'Sub item', link: '/' },
    ]
  },
  {
    id: 4,
    name: "Promotion_Price",
    link: "/sale",
    children: [
      { name: 'Sub item', link: '/' },
      { name: 'Sub item', link: '/' },
    ]
  },
  { id: 5, name: "Store_Management", link: "/companies" },
  { id: 6, name: "Advertising_Management", link: "/contact-us" },
];

export const productsData = [
  {
    id: "21",
    "buybox": "ABC Corp",
    "Product_information": "A powerful smartphone with advanced features",
    "Barcode": "123456789012",
    "Brand": "XYZ",
    "Model_Code": "SMX-123",
    "Color": "Black",
    "Body": "Metal",
    "Commission": 0.05,
    "Market_Selling_Price": 129.99,
    "Sealal_Sale_Price": 109.99,
    "Stock": 50,
    "Situation": "New",
    "Transactions": 100
  },
  {
    id: "22",
    "buybox": "XYZ Corp",
    "Product_information": "A high-performance laptop for professionals",
    "Barcode": "234567890123",
    "Brand": "ABC",
    "Model_Code": "LPY-456",
    "Color": "Silver",
    "Body": "Aluminum",
    "Commission": 0.07,
    "Market_Selling_Price": 199.99,
    "Sealal_Sale_Price": 179.99,
    "Stock": 20,
    "Situation": "Refurbished",
    "Transactions": 50
  },
  {
    id: "23",
    "buybox": "PQR Corp",
    "Product_information": "Comfortable headphones with noise-cancellation",
    "Barcode": "345678901234",
    "Brand": "LMN",
    "Model_Code": "HPZ-789",
    "Color": "White",
    "Body": "Plastic",
    "Commission": 0.03,
    "Market_Selling_Price": 39.99,
    "Sealal_Sale_Price": 34.99,
    "Stock": 100,
    "Situation": "New",
    "Transactions": 500
  },
  {
    id: "24",
    "buybox": "LMN Corp",
    "Product_information": "A stylish and versatile smartwatch",
    "Barcode": "456789012345",
    "Brand": "PQR",
    "Model_Code": "SWT-012",
    "Color": "Gold",
    "Body": "Stainless steel",
    "Commission": 0.08,
    "Market_Selling_Price": 249.99,
    "Sealal_Sale_Price": 229.99,
    "Stock": 10,
    "Situation": "New",
    "Transactions": 25
  },
  {
    id: "25",
    "buybox": "JKL Corp",
    "Product_information": "Powerful speakers with wireless connectivity",
    "Barcode": "567890123456",
    "Brand": "JKL",
    "Model_Code": "SPV-345",
    "Color": "Black",
    "Body": "Plastic",
    "Commission": 0.06,
    "Market_Selling_Price": 99.99,
    "Sealal_Sale_Price": 89.99,
    "Stock": 30,
    "Situation": "New",
    "Transactions": 75
  }
]

export const salesInformation = [
  {
    "Image": "/images/products/1.png",
    "Barcode": "123456789012",
    "Color": "Black",
    "Trendyol Sale Price": 49.99,
    "Stock": 100,
    "VAT": 0.18,
    "Stock code": "PRD-001",
    "Process": "New arrival"
  },
  {
    "Image": "/images/products/2.png",
    "Barcode": "234567890123",
    "Color": "White",
    "Trendyol Sale Price": 29.99,
    "Stock": 50,
    "VAT": 0.18,
    "Stock code": "PRD-002",
    "Process": "Clearance sale"
  },
  {
    "Image": "/images/products/3.png",
    "Barcode": "345678901234",
    "Color": "Red",
    "Trendyol Sale Price": 69.99,
    "Stock": 20,
    "VAT": 0.18,
    "Stock code": "PRD-003",
    "Process": "Pre-order"
  },
  {
    "Image": "/images/products/4.png",
    "Barcode": "456789012345",
    "Color": "Blue",
    "Trendyol Sale Price": 99.99,
    "Stock": 10,
    "VAT": 0.18,
    "Stock code": "PRD-004",
    "Process": "Back in stock"
  },
  {
    "Image": "/images/products/5.png",
    "Barcode": "567890123456",
    "Color": "Green",
    "Trendyol Sale Price": 39.99,
    "Stock": 30,
    "VAT": 0.18,
    "Stock code": "PRD-005",
    "Process": "Limited edition"
  }
]
export const gallery = [
  { file_name: 'W7A5367.jpg', size: '1200x1800 15.09.2021', image: "/images/products/1.png" },
  { file_name: 'W7A5367.jpg', size: '1200x1800 15.09.2021', image: "/images/products/1.png" },
  { file_name: 'W7A5367.jpg', size: '1200x1800 15.09.2021', image: "/images/products/1.png" },
  { file_name: 'W7A5367.jpg', size: '1200x1800 15.09.2021', image: "/images/products/1.png" },
]

export const customerQuestions = [

  {
    id: 1,
    "Product_information": "A high-quality widget for everyday use",
    "Question_Detail": "Does the widget come in different colors?",
    "Process": "We currently offer the widget in black and white."
  },
  {
    id: 2,
    "Product_information": "An advanced widget for tech enthusiasts",
    "Question_Detail": "What is the warranty on Widget B?",
    "Process": "Widget B comes with a 1-year warranty for all manufacturing defects."
  },
  {
    id: 3,
    "Product_information": "A compact widget for travel",
    "Question_Detail": "Can Widget C be used internationally?",
    "Process": "Yes, Widget C works with all international power outlets."
  },
  {
    id: 4,
    "Product_information": "A durable widget for outdoor activities",
    "Question_Detail": "Is Widget D waterproof?",
    "Process": "Yes, Widget D is completely waterproof and can be used in any weather condition."
  },
  {
    id: 5,
    "Product_information": "A versatile widget with multiple functions",
    "Question_Detail": "What are the different functions of Widget E?",
    "Process": "Widget E can be used as a flashlight, a compass, and a thermometer."
  },
  {
    id: 6,
    "Product_information": "A stylish widget for home decor",
    "Question_Detail": "What colors is Widget F available in?",
    "Process": "Widget F is available in black, white, and silver."
  },
  {
    id: 7,
    "Product_information": "A high-performance widget for professionals",
    "Question_Detail": "When will Widget G be back in stock?",
    "Process": "We expect Widget G to be back in stock in 2-3 weeks."
  },
  {
    id: 8,
    "Product_information": "An eco-friendly widget made from recycled materials",
    "Question_Detail": "How is Widget H environmentally friendly?",
    "Process": "Widget H is made from 100% recycled plastic and comes in eco-friendly packaging."
  },
  {
    id: 9,
    "Product_information": "A customizable widget that can be personalized",
    "Question_Detail": "Can Widget I be engraved with a name or message?",
    "Process": "Yes, Widget I can be engraved with a name or message of your choice."
  },
  {
    id: 10,
    "Product_information": "A budget-friendly widget for everyday use",
    "Question_Detail": "What is the material of Widget J?",
    "Process": "Widget J is made from high-quality plastic that is durable and long-lasting."
  }

]
export const documentData = [
  {
    id: 1,
    'Creation_Date': "12/01/203",
    'Brand': "Lorem ipsum",
    'Category': "Category",
    'Document_Detail': "Lorem ipsum, or lipsum Lorem ipsum, or lipsum Lorem ipsum, or lipsum",
    'Document_Status': "Lorem ipsum",
  },
  {
    id: 2,
    'Creation_Date': "12/01/203",
    'Brand': "Lorem ipsum",
    'Category': "Category",
    'Document_Detail': "Lorem ipsum, or lipsum Lorem ipsum, or lipsum Lorem ipsum, or lipsum",
    'Document_Status': "Lorem ipsum",
  },
  {
    id: 3,
    'Creation_Date': "12/01/203",
    'Brand': "Lorem ipsum",
    'Category': "Category",
    'Document_Detail': "Lorem ipsum, or lipsum Lorem ipsum, or lipsum Lorem ipsum, or lipsum",
    'Document_Status': "Lorem ipsum",
  },
  {
    id: 4,
    'Creation_Date': "12/01/203",
    'Brand': "Lorem ipsum",
    'Category': "Category",
    'Document_Detail': "Lorem ipsum, or lipsum Lorem ipsum, or lipsum Lorem ipsum, or lipsum",
    'Document_Status': "Lorem ipsum",
  },
  {
    id: 5,
    'Creation_Date': "12/01/203",
    'Brand': "Lorem ipsum",
    'Category': "Category",
    'Document_Detail': "Lorem ipsum, or lipsum Lorem ipsum, or lipsum Lorem ipsum, or lipsum",
    'Document_Status': "Lorem ipsum",
  },

]


export const allNotifications = [
  {
    "Notification_No": 1,
    "Stream_Name": "Marketing",
    "occur_History": "The marketing team received complaints from several customers regarding the quality of the product.",
    "Solve_History": "The marketing team investigated the issue and found that there was a problem with the manufacturing process. They worked with the production team to fix the issue.",
    "Redirect_Date": "2022-01-15",
    "Grade_Status": "Resolved",
    "Situation": "Quality Issue"
  },
  {
    "Notification_No": 2,
    "Stream_Name": "Sales",
    "occur_History": "The sales team noticed a decrease in sales in a particular region.",
    "Solve_History": "The sales team conducted market research and found that a competitor had recently launched a similar product. They adjusted their pricing strategy to remain competitive.",
    "Redirect_Date": "2022-02-10",
    "Grade_Status": "Resolved",
    "Situation": "Competition"
  },
  {
    "Notification_No": 3,
    "Stream_Name": "Human Resources",
    "occur_History": "An employee reported experiencing harassment from a colleague.",
    "Solve_History": "The HR team conducted an investigation and found evidence of the harassment. They took appropriate disciplinary action against the colleague.",
    "Redirect_Date": "2022-03-05",
    "Grade_Status": "Resolved",
    "Situation": "Harassment"
  },
  {
    "Notification_No": 4,
    "Stream_Name": "IT",
    "occur_History": "The company's website was down for several hours.",
    "Solve_History": "The IT team identified a problem with the hosting provider and worked with them to resolve the issue.",
    "Redirect_Date": "2022-04-01",
    "Grade_Status": "Resolved",
    "Situation": "Website Down"
  },
  {
    "Notification_No": 5,
    "Stream_Name": "Finance",
    "occur_History": "A customer reported an incorrect charge on their account.",
    "Solve_History": "The finance team investigated the issue and found that it was a billing error. They refunded the customer and updated their billing system to prevent similar errors in the future.",
    "Redirect_Date": "2022-05-20",
    "Grade_Status": "Resolved",
    "Situation": "Billing Error"
  },
  {
    "Notification_No": 6,
    "Stream_Name": "Operations",
    "occur_History": "Several employees reported safety concerns in the warehouse.",
    "Solve_History": "The operations team conducted a safety audit and identified several areas for improvement. They implemented new safety protocols and provided additional safety training to employees.",
    "Redirect_Date": "2022-06-15",
    "Grade_Status": "Resolved",
    "Situation": "Safety Concerns"
  },
  {
    "Notification_No": 7,
    "Stream_Name": "Customer Service",
    "occur_History": "A customer reported a problem with their order delivery.",
    "Solve_History": "The customer service team investigated the issue and found that there was a problem with the shipping carrier. They worked with the carrier to resolve the issue and provided the customer with a refund for the delayed delivery.",
    "Redirect_Date": "2022-07-10",
    "Grade_Status": "Resolved",
    "Situation": "Delivery Delay"
  }
]

export const notifications = [
  {
    "id": 1,
    "title": "Annual Company Picnic",
    "description": "Join us for our annual company picnic at Central Park",
    "date": "2023-07-15T10:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Complete Project Proposal",
    "description": "Draft and submit project proposal for client X",
    "date": "2023-06-30T23:59:59.000Z"
  },
  {
    "id": 3,
    "title": "Doctor's Appointment",
    "description": "Don't forget to go for your annual checkup with Dr. Smith",
    "date": "2023-07-01T09:30:00.000Z"
  },
  {
    "id": 4,
    "title": "New Study Shows Benefits of Regular Exercise",
    "description": "A new study published in the Journal of Health and Fitness finds that regular exercise can improve mental health and reduce risk of chronic diseases.",
    "date": "2023-06-29T18:00:00.000Z"
  },
  {
    "id": 5,
    "title": "Summer Clearance Sale",
    "description": "Get up to 50% off on summer clothing and accessories",
    "date": "2023-07-10T00:00:00.000Z"
  }
]


export const newOrders = [
  {
    Order_Information: " Order_Information",
    "Package_No": "ABC123",
    "Buyer": "John Smith",
    "Piece": "Widget",
    "Information": "Blue, Large",
    "Unit_price": 12.99,
    "Cargo": "Air",
    "Invoice": "INV-456",
    "Situation": "Pending"
  },
  {
    Order_Information: " Order_Information",
    "Package_No": "DEF456",
    "Buyer": "Jane Doe",
    "Piece": "Gadget",
    "Information": "Red, Small",
    "Unit_price": 9.99,
    "Cargo": "Ground",
    "Invoice": "INV-789",
    "Situation": "Shipped"
  },
  {
    Order_Information: " Order_Information",
    "Package_No": "GHI789",
    "Buyer": "Bob Johnson",
    "Piece": "Thingamajig",
    "Information": "Green, Medium",
    "Unit_price": 24.99,
    "Cargo": "Sea",
    "Invoice": "INV-012",
    "Situation": "Delivered"
  },
  {
    Order_Information: " Order_Information",
    "Package_No": "JKL012",
    "Buyer": "Sarah Lee",
    "Piece": "Doodad",
    "Information": "Purple, Large",
    "Unit_price": 17.99,
    "Cargo": "Air",
    "Invoice": "INV-345",
    "Situation": "Pending"
  },
  {
    Order_Information: " Order_Information",
    "Package_No": "MNO345",
    "Buyer": "Tom Jackson",
    "Piece": "Whatchamacallit",
    "Information": "Yellow, Small",
    "Unit_price": 7.99,
    "Cargo": "Ground",
    "Invoice": "INV-678",
    "Situation": "Shipped"
  }
]

export const canceledOrders = [
  {
    "Order_Information": "Order_Information",
    "Buyer": "Alice Smith",
    "Piece": "Widget",
    "Information": "Green, Large",
    "Unit_price": 15.99,
    "Cancelation_date": "2023-06-05",
    "Reason_for_cancellation": "Item no longer needed"
  },
  {
    "Order_Information": "Order_Information",
    "Buyer": "Bob Johnson",
    "Piece": "Gadget",
    "Information": "Blue, Small",
    "Unit_price": 12.99,
    "Cancelation_date": "2023-06-06",
    "Reason_for_cancellation": "Product arrived damaged"
  },
  {
    "Order_Information": "Order_Information",
    "Buyer": "Charlie Brown",
    "Piece": "Thingamajig",
    "Information": "Red, Medium",
    "Unit_price": 19.99,
    "Cancelation_date": "2023-06-04",
    "Reason_for_cancellation": "Changed mind about purchase"
  },
  {
    "Order_Information": "Order_Information",
    "Buyer": "Diana Garcia",
    "Piece": "Doodad",
    "Information": "Yellow, Large",
    "Unit_price": 22.99,
    "Cancelation_date": "2023-06-01",
    "Reason_for_cancellation": "Found better deal elsewhere"
  },
  {
    "Order_Information": "Order_Information",
    "Buyer": "Ethan Lee",
    "Piece": "Whatchamacallit",
    "Information": "Purple, Small",
    "Unit_price": 9.99,
    "Cancelation_date": "2023-06-02",
    "Reason_for_cancellation": "Ordered wrong item by mistake"
  }
]

export const returnsProcesses = [
  {
    "Order_Information": "Order infromation",
    "Buyer": "John Smith",
    "Piece": "Widget",
    "Information": "Blue, Large",
    "Unit_price": 12.99,
    "Cargo": "Air",
    "Invoice": "INV-456",
    "Reason_for_return": "Item arrived damaged",
    "Situation": "Pending"
  },
  {
    "Order_Information": "Order infromation",
    "Buyer": "Jane Doe",
    "Piece": "Gadget",
    "Information": "Red, Small",
    "Unit_price": 9.99,
    "Cargo": "Ground",
    "Invoice": "INV-789",
    "Reason_for_return": "Wrong item shipped",
    "Situation": "Received"
  },
  {
    "Order_Information": "Order infromation",
    "Buyer": "Bob Johnson",
    "Piece": "Thingamajig",
    "Information": "Green, Medium",
    "Unit_price": 24.99,
    "Cargo": "Sea",
    "Invoice": "INV-012",
    "Reason_for_return": "Changed mind about purchase",
    "Situation": "Processing"
  },
  {
    "Order_Information": "Order infromation",
    "Buyer": "Sarah Lee",
    "Piece": "Doodad",
    "Information": "Purple, Large",
    "Unit_price": 17.99,
    "Cargo": "Air",
    "Invoice": "INV-345",
    "Reason_for_return": "Item not as described",
    "Situation": "Completed"
  },
  {
    "Order_Information": "Order infromation",
    "Buyer": "Tom Jackson",
    "Piece": "Whatchamacallit",
    "Information": "Yellow, Small",
    "Unit_price": 7.99,
    "Cargo": "Ground",
    "Invoice": "INV-678",
    "Reason_for_return": "Item defective",
    "Situation": "Processing"
  }
]

export const companyChanges = [
  {
    "Company_name": "ABC Industries",
    "Date_of_Change": "2023-06-01",
    "Working_Status": "Active",
    "Working_Model": "B2B",
    "Change_Channel": "Email",
    "Transactions": 150
  },
  {
    "Company_name": "XYZ Corporation",
    "Date_of_Change": "2023-06-02",
    "Working_Status": "Inactive",
    "Working_Model": "B2C",
    "Change_Channel": "Phone",
    "Transactions": 75
  },
  {
    "Company_name": "123 Enterprises",
    "Date_of_Change": "2023-06-03",
    "Working_Status": "Active",
    "Working_Model": "B2B",
    "Change_Channel": "Website",
    "Transactions": 200
  },
  {
    "Company_name": "789 Inc.",
    "Date_of_Change": "2023-06-04",
    "Working_Status": "Active",
    "Working_Model": "B2C",
    "Change_Channel": "Email",
    "Transactions": 100
  },
  {
    "Company_name": "456 Corporation",
    "Date_of_Change": "2023-06-05",
    "Working_Status": "Inactive",
    "Working_Model": "B2B",
    "Change_Channel": "Phone",
    "Transactions": 50
  }
]

export const packages = [
  {
    "size": "XS",
    "count": 50,
    "unit_price": 1.5,
    "quality": "Average",
    "package_price": 12
  },
  {
    "size": "S",
    "count": 150,
    "unit_price": 2.5,
    "quality": "Good",
    "package_price": 25
  },
  {
    "size": "M",
    "count": 500,
    "unit_price": 3.0,
    "quality": "Excellent",
    "package_price": 45
  },
  {
    "size": "L",
    "count": 1000,
    "unit_price": 2.0,
    "quality": "Good",
    "package_price": 24
  },

  {
    "size": "xL",
    "count": 1500,
    "unit_price": 5.0,
    "quality": "Average",
    "package_price": 100
  },
  {
    "size": "XLL",
    "count": 2000,
    "unit_price": 10.0,
    "quality": "Premium",
    "package_price": 50
  },
]

export const reviews = [
  { name: 'Ali Cakir', role: 'Kemerix', title: 'Efficient and Fast', comment: 'Thanks to my Trendyol e-invoice, our workload has decreased. The batch invoice feature has been great, our processes have become much more efficient and faster.', rating: 4, image: "/images/reviews/1.png", },
  { name: 'ERGUN AKTAS', role: 'NAZ Accessory', title: 'Fast and Simple!', comment: 'Trendyol E-invoice is very fast and simple to use. The batch invoice feature makes the job easier.', rating: 4, image: "/images/reviews/2.png", },
  { name: 'Ayse Guney', role: 'A & G Pastry', title: 'Reassuring', comment: 'It is good and reassuring to know that our customers receive their e-invoices immediately. It is also very nice that the price is affordable and practical.', rating: 4, image: "/images/reviews/3.png", },
  { name: 'Ayse Guney', role: 'A & G Pastry', title: 'Reassuring', comment: 'It is good and reassuring to know that our customers receive their e-invoices immediately. It is also very nice that the price is affordable and practical.', rating: 4, image: "/images/reviews/3.png", },

]


export const invoicing = [
  {
    "INVOICE_NUMBER": "INV-001",
    "BILL_TYPE": "Sales",
    "INVOICE_DATE": "2022-01-01",
    "AMOUNT": 1200.00
  },
  {
    "INVOICE_NUMBER": "INV-002",
    "BILL_TYPE": "Purchase",
    "INVOICE_DATE": "2022-01-02",
    "AMOUNT": 5000.00
  },
  {
    "INVOICE_NUMBER": "INV-003",
    "BILL_TYPE": "Sales",
    "INVOICE_DATE": "2022-01-03",
    "AMOUNT": 3000.00
  },
  {
    "INVOICE_NUMBER": "INV-004",
    "BILL_TYPE": "Purchase",
    "INVOICE_DATE": "2022-01-04",
    "AMOUNT": 7500.00
  },
  {
    "INVOICE_NUMBER": "INV-005",
    "BILL_TYPE": "Sales",
    "INVOICE_DATE": "2022-01-05",
    "AMOUNT": 500.00
  }
]

export const paymentHistory = [
  {
    "PROCESS_TYPE": "Type A",
    "EXPLANATION": "Explanation 1",
    "INVOICE_NUMBER": "INV001",
    "NET_AMOUNT": 1000.00
  },
  {
    "PROCESS_TYPE": "Type B",
    "EXPLANATION": "Explanation 2",
    "INVOICE_NUMBER": "INV002",
    "NET_AMOUNT": 2000.00
  },
  {
    "PROCESS_TYPE": "Type C",
    "EXPLANATION": "Explanation 3",
    "INVOICE_NUMBER": "INV003",
    "NET_AMOUNT": 3000.00
  },
  {
    "PROCESS_TYPE": "Type D",
    "EXPLANATION": "Explanation 4",
    "INVOICE_NUMBER": "INV004",
    "NET_AMOUNT": 4000.00
  },
  {
    "PROCESS_TYPE": "Type E",
    "EXPLANATION": "Explanation 5",
    "INVOICE_NUMBER": "INV005",
    "NET_AMOUNT": 5000.00
  }
]

export const paymentHistoryDetails = [
  {
    "PROCESS_TYPE": "Type A",
    "ORDER_NUMBER": "ORD001",
    "TRANSACTION_DATE": "2022-01-01",
    "DATE_OF_EXTRACT": "2022-01-02",
    "DETAIL_PRODUCT__DESCRIPTION": "Product A",
    "AMOUNT": 1000.00,
    "COMMISSION": 100.00,
    "NET_AMOUNT": 900.00
  },
  {
    "PROCESS_TYPE": "Type B",
    "ORDER_NUMBER": "ORD002",
    "TRANSACTION_DATE": "2022-01-03",
    "DATE_OF_EXTRACT": "2022-01-04",
    "DETAIL_PRODUCT__DESCRIPTION": "Product B",
    "AMOUNT": 2000.00,
    "COMMISSION": 200.00,
    "NET_AMOUNT": 1800.00
  },
  {
    "PROCESS_TYPE": "Type C",
    "ORDER_NUMBER": "ORD003",
    "TRANSACTION_DATE": "2022-01-05",
    "DATE_OF_EXTRACT": "2022-01-06",
    "DETAIL_PRODUCT__DESCRIPTION": "Product C",
    "AMOUNT": 3000.00,
    "COMMISSION": 300.00,
    "NET_AMOUNT": 2700.00
  },
  {
    "PROCESS_TYPE": "Type D",
    "ORDER_NUMBER": "ORD004",
    "TRANSACTION_DATE": "2022-01-07",
    "DATE_OF_EXTRACT": "2022-01-08",
    "DETAIL_PRODUCT__DESCRIPTION": "Product D",
    "AMOUNT": 4000.00,
    "COMMISSION": 400.00,
    "NET_AMOUNT": 3600.00
  },
  {
    "PROCESS_TYPE": "Type E",
    "ORDER_NUMBER": "ORD005",
    "TRANSACTION_DATE": "2022-01-09",
    "DATE_OF_EXTRACT": "2022-01-10",
    "DETAIL_PRODUCT__DESCRIPTION": "Product E",
    "AMOUNT": 5000.00,
    "COMMISSION": 500.00,
    "NET_AMOUNT": 4500.00
  }
]
export const dailyRecordsData = [
  {
    "Receipt_NO": "RCPT001",
    "DATE_OF_RELEASE": "2022-01-01",
    "EXPIRY_DATE": "2022-01-31",
    "TERM_DAY": 30,
    "AMOUNT": 1000.00
  },
  {
    "Receipt_NO": "RCPT002",
    "DATE_OF_RELEASE": "2022-02-01",
    "EXPIRY_DATE": "2022-02-28",
    "TERM_DAY": 27,
    "AMOUNT": 2000.00
  },
  {
    "Receipt_NO": "RCPT003",
    "DATE_OF_RELEASE": "2022-03-01",
    "EXPIRY_DATE": "2022-03-31",
    "TERM_DAY": 30,
    "AMOUNT": 3000.00
  },
  {
    "Receipt_NO": "RCPT004",
    "DATE_OF_RELEASE": "2022-04-01",
    "EXPIRY_DATE": "2022-04-30",
    "TERM_DAY": 29,
    "AMOUNT": 4000.00
  },
  {
    "Receipt_NO": "RCPT005",
    "DATE_OF_RELEASE": "2022-05-01",
    "EXPIRY_DATE": "2022-05-31",
    "TERM_DAY": 30,
    "AMOUNT": 5000.00
  }
]


export const accountStatementData = [
  {
    "Request_No": "REQ001",
    "File_name": "file001.csv",
    "Period": {
      "from": "2022-01-01",
      "to": "2022-01-31"
    },
  },
  {
    "Request_No": "REQ002",
    "File_name": "file002.csv",
    "Period": {
      "from": "2022-02-01",
      "to": "2022-02-28"
    },
  },
  {
    "Request_No": "REQ003",
    "File_name": "file003.csv",
    "Period": {
      "from": "2022-03-01",
      "to": "2022-03-31"
    },
  },
  {
    "Request_No": "REQ004",
    "File_name": "file004.csv",
    "Period": {
      "from": "2022-04-01",
      "to": "2022-04-30"
    },
  },
  {
    "Request_No": "REQ005",
    "File_name": "file005.csv",
    "Period": {
      "from": "2022-05-01",
      "to": "2022-05-31"
    },
  }
]


export const productCommissionData = [
  {
    "Product_Information": "Product A",
    "Question_Detail": "How can I order Product A?",
    "Process": "Online Ordering"
  },
  {
    "Product_Information": "Product B",
    "Question_Detail": "What are the dimensions of Product B?",
    "Process": "Product Information Request"
  },
  {
    "Product_Information": "Product C",
    "Question_Detail": "How long does it take to ship Product C?",
    "Process": "Shipping Inquiry"
  },
  {
    "Product_Information": "Product D",
    "Question_Detail": "Can I return Product D if I'm not satisfied?",
    "Process": "Return Request"
  },
  {
    "Product_Information": "Product E",
    "Question_Detail": "What is the warranty on Product E?",
    "Process": "Warranty Inquiry"
  }
]

export const myCoupons = [
  {
    "START_END_DATE": "2023-06-15 to 2023-06-30",
    "COUPON_BUDGET": 5000,
    "COUPON_INFORMATION": "20% off on all products",
    "VALID_PRODUCT_NUMBER": [1001, 1002, 1003],
    "WIN_TOTAL": 100,
    "USED_TOTAL": 25,
    "COUPON_STATUS": "Active"
  },
  {
    "START_END_DATE": "2023-07-01 to 2023-07-15",
    "COUPON_BUDGET": 7500,
    "COUPON_INFORMATION": "Free shipping on orders above $50",
    "VALID_PRODUCT_NUMBER": [2001, 2002, 2003],
    "WIN_TOTAL": 50,
    "USED_TOTAL": 10,
    "COUPON_STATUS": "Active"
  },
  {
    "START_END_DATE": "2023-08-01 to 2023-08-31",
    "COUPON_BUDGET": 10000,
    "COUPON_INFORMATION": "$10 off on orders above $100",
    "VALID_PRODUCT_NUMBER": [3001, 3002, 3003],
    "WIN_TOTAL": 200,
    "USED_TOTAL": 50,
    "COUPON_STATUS": "Active"
  },
  {
    "START_END_DATE": "2023-09-01 to 2023-09-30",
    "COUPON_BUDGET": 5000,
    "COUPON_INFORMATION": "Buy one, get one free on all products",
    "VALID_PRODUCT_NUMBER": [4001, 4002, 4003],
    "WIN_TOTAL": 75,
    "USED_TOTAL": 20,
    "COUPON_STATUS": "Active"
  },
  {
    "START_END_DATE": "2023-10-01 to 2023-10-31",
    "COUPON_BUDGET": 2500,
    "COUPON_INFORMATION": "15% off on all orders above $50",
    "VALID_PRODUCT_NUMBER": [5001, 5002, 5003],
    "WIN_TOTAL": 50,
    "USED_TOTAL": 5,
    "COUPON_STATUS": "Active"
  }
]
export const flashPricesData = [
  {
    "Creation_Date": "2023-06-09",
    "Product_Information": "Product A",
    "Question_Detail": "How can I order Product A?",
    "Process": "Online Ordering"
  },
  {
    "Creation_Date": "2023-06-09",
    "Product_Information": "Product B",
    "Question_Detail": "What are the dimensions of Product B?",
    "Process": "Product Information Request"
  },
  {
    "Creation_Date": "2023-06-09",
    "Product_Information": "Product C",
    "Question_Detail": "How long does it take to ship Product C?",
    "Process": "Shipping Inquiry"
  },
  {
    "Creation_Date": "2023-06-09",
    "Product_Information": "Product D",
    "Question_Detail": "Can I return Product D if I'm not satisfied?",
    "Process": "Return Request"
  },
  {
    "Creation_Date": "2023-06-09",
    "Product_Information": "Product E",
    "Question_Detail": "What is the warranty on Product E?",
    "Process": "Warranty Inquiry"
  }
]

export const companies = [{
  "company_name": "ABC Inc.",
  "date_of_change": "2022-01-01",
  "working_status": "Active",
  "working_model": "Hybrid",
  "change_channel": "Internal"
},

{
  "company_name": "XYZ Corp.",
  "date_of_change": "2022-03-15",
  "working_status": "Inactive",
  "working_model": "Remote",
  "change_channel": "Email"
},
{
  "company_name": "123 Co.",
  "date_of_change": "2022-06-30",
  "working_status": "Active",
  "working_model": "In-person",
  "change_channel": "Meeting"
},
{
  "company_name": "DEF LLC",
  "date_of_change": "2022-09-01",
  "working_status": "Active",
  "working_model": "Hybrid",
  "change_channel": "In-person"
},
{
  "company_name": "456 Ltd.",
  "date_of_change": "2022-12-31",
  "working_status": "Inactive",
  "working_model": "Remote",
  "change_channel": "Phone"
}]
// unused

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
    "id": 1,
    "name": "Women's Floral Dress",
    "description": "A beautiful floral dress for women, perfect for any occasion.",
    "stock": 30,
    "status": "in_stock",
    "image": "/images/products/20.jfif",
    "price": 59.99,
    "rating": 4.8,
    "favorite": false,
    "discount": 10,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
    "images": [
      "/images/products/20.jfif",
      "/images/products/21.jpg",
      "/images/products/23.webp",
      "/images/products/24.jpg",
    ],
    "colors": [
      "pink",
      "blue",
      "green",
      "yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": 2,
    "name": "Men's T-shirt",
    "description": "A stylish T-shirt for men, made with high-quality leather.",
    "stock": 20,
    "status": "in_stock",
    "image": "/images/products/25.jpg",
    "price": 149.99,
    "rating": 4.6,
    "favorite": true,
    "discount": 20,
    "company_name": "Leather Co.",
    "delivery_time": "2-3 days",
    "images": [
      "/images/products/25.jpg",
      "/images/products/28.jpg",
    ],
    "colors": [
      "black",
      "brown",
      "tan",
      "gray"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "id": 4,
    "name": "Men's Jacket",
    "description": "A classic Jacket for men, made with soft and breathable cotton.",
    "stock": 40,
    "status": "in_stock",
    "image": "/images/products/2.png",
    "price": 34.99,
    "rating": 4.4,
    "favorite": true,
    "discount": 15,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
  },
  {
    "id": 5,
    "name": "Laptop",
    "description": "high, fast, more power laptop",
    "stock": 25,
    "status": "in_stock",
    "image": "/images/products/",
    "price": 49.99,
    "rating": 4.7,
    "favorite": false,
    "discount": 5,
    "company_name": "Denim Co.",
    "delivery_time": "2-5 days",
    "images": [
      "/images/products/6.png",
      "/images/products/29.jpg",
      "/images/products/30.jpg"
    ],
    "colors": [
      "blue",
      "black",
      "gray"
    ],
    "sizes": [
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ]
  },
  {
    "id": 6,
    "name": "Ipad",
    "description": "made with lightweight.",
    "stock": 35,
    "status": "in_stock",
    "image": "/images/products/33.jpg",
    "price": 44.99,
    "rating": 4.2,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "2-4 days",
    "images": [
      "/images/products/33.jpg",
      "/images/products/34.png",
      "/images/products/35.png",
      "/images/products/36.jfif"
    ],
    "colors": [
      "tan",
      "navy",
      "gray",
      "black"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ]
  },
  {
    "id": 7,
    "name": "men's Leather Ankle Boots",
    "description": "Stylish and comfortable leather ankle boots for men, perfect for any occasion.",
    "stock": 15,
    "status": "in_stock",
    "image": "/images/products/15.jfif",
    "price": 89.99,
    "rating": 4.5,
    "favorite": false,
    "discount": 0,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
    "images": [
      "/images/products/15.jfif",
      "/images/products/16.jfif",
      "/images/products/17.webp",
      "/images/products/18.webp"
    ],
    "colors": [
      "black",
      "brown",
      "tan"
    ],
    "sizes": [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
  },
  {
    "id": 8,
    "name": "Men's parphan",
    "description": "A comfortable and warm parphan for men, perfect for chilly weather.",
    "stock": 45,
    "status": "in_stock",
    "image": "/images/products/37.jpg",
    "price": 29.99,
    "rating": 4.3,
    "favorite": true,
    "discount": 0,
    "company_name": "Fashion Co.",
    "delivery_time": "2-4 days",
    "images": [
      "/images/products/37.jpg",
      "/images/products/38.jfif",
      "/images/products/39.jfif",
      "/images/products/40.jfif"
    ],
    "colors": [
      "gray",
      "black",
      "blue",
      "green"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": 9,
    "name": "Women's Denim Jacket",
    "description": "A classic denim jacket for women, made with high-quality denim and a comfortable fit.",
    "stock": 20,
    "status": "in_stock",
    "image": "/images/products/5.png",
    "price": 79.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Denim Co.",
    "delivery_time": "3-5 days",
  },
  {
    "id": 10,
    "name": "Headphone",
    "description": "A classic headphone for men & women, made with high-quality denim and a comfortable fit.",
    "stock": 10,
    "status": "in_stock",
    "image": "/images/products/3.png",
    "price": 179.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "2-5 days",
  },
  {
    "id": 11,
    "name": "Camera",
    "description": "A classic Camera with high-quality denim and a comfortable",
    "stock": 16,
    "status": "in_stock",
    "image": "/images/products/8.jfif",
    "price": 299.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "3-7 days",
  },
  {
    "id": 11,
    "name": "Phone",
    "description": "A Modern Phones with high-quality denim and a comfortable",
    "stock": 16,
    "status": "in_stock",
    "price": 299.99,
    "rating": 4.6,
    "favorite": false,
    "discount": 0,
    "company_name": "Tech Co.",
    "delivery_time": "3-7 days",
    "images": [
      "/images/products/12.jpg",
      "/images/products/13.jpg",
      "/images/products/14.jpg",
    ],
    colors: ['red', 'pink', 'gray']
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



export const cartList = [

  {
    "id": 1,
    "name": "Women's Floral Dress",
    "description": "A beautiful floral dress for women, perfect for any occasion.",
    "stock": 30,
    "status": "in_stock",
    "image": "/images/products/20.jfif",
    "price": 59.99,
    "rating": 4.8,
    "favorite": false,
    "discount": 10,
    quantity: 1,
    "company_name": "Fashion Co.",
    "delivery_time": "3-5 days",
    "images": [
      "/images/products/20.jfif",
      "/images/products/21.jpg",
      "/images/products/23.webp",
      "/images/products/24.jpg",
    ],
    "colors": [
      "pink",
      "blue",
      "green",
      "yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
]


export const sellerOrders = [
  {
    "order_number": "5b7e2297",
    "product_name": "Chair",
    "quantity": 7,
    "address_details": {
      "address": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e0df0a74",
    "product_name": "Table",
    "quantity": 5,
    "address_details": {
      "address": "456 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "a4e7bce2",
    "product_name": "Sofa",
    "quantity": 2,
    "address_details": {
      "address": "789 Elm St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "7e377d9d",
    "product_name": "Armchair",
    "quantity": 1,
    "address_details": {
      "address": "321 Pine St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "8f8b0e6d",
    "product_name": "Bed",
    "quantity": 3,
    "address_details": {
      "address": "654 Cedar St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e3e7b6c3",
    "product_name": "Bookshelf",
    "quantity": 2,
    "address_details": {
      "address": "987 Birch St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "a4c8e4b7",
    "product_name": "Desk",
    "quantity": 1,
    "address_details": {
      "address": "246 Walnut St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e5e4d4fe",
    "product_name": "Lamp",
    "quantity": 4,
    "address_details": {
      "address": "753 Maple St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "a3e8d9c6",
    "product_name": "Mirror",
    "quantity": 2,
    "address_details": {
      "address": "159 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "c1d3d1e0",
    "product_name": "Rug",
    "quantity": 1,
    "address_details": {
      "address": "852 Cedar St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "f7e0c2c9",
    "product_name": "Side table",
    "quantity": 2,
    "address_details": {
      "address": "753 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "d1b7e5a1",
    "product_name": "Armchair",
    "quantity": 1,
    "address_details": {
      "address": "963 Pine St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e5f3b9d6",
    "product_name": "Bookcase",
    "quantity": 3,
    "address_details": {
      "address": "753 Walnut St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "b8c4e1d0",
    "product_name": "Chair",
    "quantity": 4,
    "address_details": {
      "address": "246 Cedar St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "d6c1e8d3",
    "product_name": "Coffee table",
    "quantity": 1,
    "address_details": {
      "address": "753 Pine St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "f0d4e2b2",
    "product_name": "Dining table",
    "quantity": 1,
    "address_details": {
      "address": "246 Elm St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e4d0b4c8",
    "product_name": "Lamp",
    "quantity": 2,
    "address_details": {
      "address": "963 Oak St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "b0f2c5a1",
    "product_name": "Sofa",
    "quantity": 1,
    "address_details": {
      "address": "852 Elm St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  },
  {
    "order_number": "e8d0c2b6",
    "product_name": "TV stand",
    "quantity": 1,
    "address_details": {
      "address": "159 Walnut St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    }
  }
]

export const addresses = [
  {
    id: 1,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 2,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 3,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 4,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },
];


export const paymentsBank = [
  {
    "id": 987654,
    "bank_name": "First National Bank",
    "vpn": 2353,
    "name": "Jane Smith",
    "date": "12/25"
  },

  {
    "id": 567890,
    "bank_name": "Global Bank",
    "vpn": 3212,
    "name": "Bob Johnson",
    "date": "10/24"
  },

  {
    "id": 246810,
    "bank_name": "City Bank",
    "vpn": 4364,
    "name": "Sarah Lee",
    "date": "12/34"
  }]

