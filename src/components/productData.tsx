// Update Product interface to make images an array
interface Product {
    name: string;
    description: string;
    images: string[]; // Change from string to string[]
    category: string;
    sale?: string;
    oldPrice?: number;
    currentPrice: number;
    id: number;
  }
  
  // Update products data to ensure images is an array
  export const products: Product[] = [
    {
      id: 1,
      name: "13 Ultrabook Gaming Laptop",
      description: "Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q",
      category: "PCs & Laptop",
      currentPrice: 1399.0,
      images: ["/images/ultrabook.jpg"], // Images is now an array
    },
    {
      id: 2,
      name: "Smart Refrigerator",
      description: "Smart cooling technology with energy saving",
      category: "Refrigerator",
      currentPrice: 1199.0,
      images: ["/images/refrigerator.jpg"],
    },
    {
      id: 3,
      name: "Home Theater System",
      description: "Best-in-class audio & video experience",
      category: "Audio & Video",
      images: ["/images/hometheater.jpg"],
      oldPrice: 159.0,
      currentPrice: 139.0,
    },
    {
      id: 4,
      name: "Product 1",
      description: "Air Conditioner 5000 BTU, Efficient Cooling for Smaller Areas Like Bedrooms and Guest Room",
      images: ["/assets/conditioners2.png"],
      category: "Air Conditioners",
      sale: "Sale!",
      oldPrice: 159.0,
      currentPrice: 139.0,
    },
    {
      id: 5,
      name: "Product 2",
      description: "BTU 115V Window-Mounted Air Conditioner with Remote Control White",
      images: ["/assets/conditioners2.png"],
      category: "Category 2",
      currentPrice: 179.0,
    },
    {
      id: 6,
      name: "Product 3",
      description: "Dual Hose Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter in Platinum",
      images: ["/assets/conditioners2.png"],
      category: "Category 3",
      currentPrice: 149.0,
    },
    {
      id: 7,
      name: "Product 4",
      description: "Star 9,500 BTU 115V Dual Inverter Window Air Conditioner with Wi-Fi Control",
      images: ["/assets/conditioners2.png"],
      category: "Category 4",
      currentPrice: 199.0,
    },
      {
        id: 8,
        name: "Product 1",
        description: "Air Conditioner 5000 BTU, Efficient Cooling for Smaller Areas Like Bedrooms and Guest Room",
        images:["/assets/conditioners2.png"],
        category: "Air Conditioners",
        sale: "Sale!",
        oldPrice: 159.00,
        currentPrice: 139.00
      },
      {
        id: 9,
        name: "Product 2",
        description: "BTU 115V Window-Mounted Air Conditioner with Remote Control White",
        images: ["/assets/conditioners2.png"],
        category: "Category 2",
        currentPrice: 179.00
      },
      {
        id: 10,
        name: "Product 3",
        description: "Dual Hose Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter in Platinum",
        images: ["/assets/conditioners2.png"],
        category: "Category 3",
        currentPrice: 149.00
      },
      {
        id: 11,
        name: "Product 4",
        description: "Star 9,500 BTU 115V Dual Inverter Window Air Conditioner with Wi-Fi Control",
        images: [ "/assets/conditioners2.png"],
        category: "Category 4",
        currentPrice: 199.00
      },
      
]
  