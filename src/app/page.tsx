// ---- Interfaces ----
interface Characteristics {
  color: string;
  material: string;
  warranty: string;
}

interface Category {
  id: number;
  name: string;
}

interface Product {
  name: string;
  brand: string;
  quantity: number;
  price: number;
  currency: "COP" | "USD";
  isActive: boolean;
  category: Category;          
  imageUrl: string;
  createdAt: string;
  characteristics: Characteristics; 
}

interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isActive: boolean;
  address: Address;  
  createdAt: string;
}

// ---- Categories ----
const electronics: Category = { id: 1, name: "Electronics" };
const fashion: Category = { id: 2, name: "Fashion" };
const food: Category = { id: 3, name: "Food" };
const home: Category = { id: 4, name: "Home" };


const products: Product[] = [
  {
    name: "iPhone 15",
    brand: "Apple",
    quantity: 10,
    price: 1200,
    currency: "USD",
    isActive: true,
    category: electronics,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Black",
      material: "Glass/Aluminum",
      warranty: "1 year"
    }
  },
  {
    name: "MacBook Air",
    brand: "Apple",
    quantity: 5,
    price: 1500,
    currency: "USD",
    isActive: true,
    category: electronics,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Silver",
      material: "Aluminum",
      warranty: "1 year"
    }
  },
  {
    name: "iPad Pro",
    brand: "Apple",
    quantity: 7,
    price: 1000,
    currency: "USD",
    isActive: true,
    category: electronics,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Space Gray",
      material: "Aluminum",
      warranty: "1 year"
    }
  },
  {
    name: "Galaxy S23",
    brand: "Samsung",
    quantity: 8,
    price: 1100,
    currency: "USD",
    isActive: true,
    category: electronics,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Black",
      material: "Glass/Metal",
      warranty: "1 year"
    }
  },
  {
    name: "Galaxy Tab S9",
    brand: "Samsung",
    quantity: 6,
    price: 800,
    currency: "USD",
    isActive: true,
    category: electronics,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Silver",
      material: "Aluminum",
      warranty: "1 year"
    }
  },
  {
    name: "Galaxy Watch 6",
    brand: "Samsung",
    quantity: 10,
    price: 400,
    currency: "USD",
    isActive: true,
    category: electronics,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Black",
      material: "Metal/Plastic",
      warranty: "1 year"
    }
  },
  {
    name: "Neverfull MM Bag",
    brand: "Louis Vuitton",
    quantity: 3,
    price: 2100,
    currency: "USD",
    isActive: true,
    category: fashion,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Brown",
      material: "Leather",
      warranty: "N/A"
    }
  },
  {
    name: "LV Sunglasses",
    brand: "Louis Vuitton",
    quantity: 5,
    price: 900,
    currency: "USD",
    isActive: true,
    category: fashion,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Black",
      material: "Plastic/Metal",
      warranty: "N/A"
    }
  },
  {
    name: "LV Wallet",
    brand: "Louis Vuitton",
    quantity: 7,
    price: 800,
    currency: "USD",
    isActive: true,
    category: fashion,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Brown",
      material: "Leather",
      warranty: "N/A"
    }
  },
  {
    name: "Big Mac Combo",
    brand: "McDonald's",
    quantity: 15,
    price: 20,
    currency: "USD",
    isActive: true,
    category: food,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "N/A",
      material: "Food",
      warranty: "N/A"
    }
  },
  {
    name: "Fried Chicken Combo",
    brand: "Frisby",
    quantity: 12,
    price: 18,
    currency: "USD",
    isActive: true,
    category: food,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "N/A",
      material: "Food",
      warranty: "N/A"
    }
  },
  {
    name: "Caffe Latte",
    brand: "Starbucks",
    quantity: 20,
    price: 5,
    currency: "USD",
    isActive: true,
    category: food,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "N/A",
      material: "Food",
      warranty: "N/A"
    }
  },
  {
    name: "Olla Express",
    brand: "Imusa",
    quantity: 10,
    price: 50,
    currency: "USD",
    isActive: true,
    category: home,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Silver",
      material: "Metal",
      warranty: "2 years"
    }
  },
  {
    name: "Mini Licuadora",
    brand: "Kalley",
    quantity: 8,
    price: 35,
    currency: "USD",
    isActive: true,
    category: home,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "White",
      material: "Plastic/Metal",
      warranty: "1 year"
    }
  },
  {
    name: "Cocina 4 Hornillas",
    brand: "Haceb",
    quantity: 5,
    price: 250,
    currency: "USD",
    isActive: true,
    category: home,
    imageUrl: "",
    createdAt: "2025-09-13",
    characteristics: {
      color: "Silver",
      material: "Metal",
      warranty: "2 years"
    }
  }
];

// ---- Usuarios ----
const users: User[] = [
  {
    id: 1,
    firstName: "Brandon",
    lastName: "Muñoz",
    email: "Brandon@gmail.com",
    phone: "3001234567",
    isActive: true,
    address: {
      street: "Calle 123",
      city: "Bogotá",
      country: "Colombia",
      postalCode: "110111"
    },
    createdAt: "2025-09-13"
  },
  {
    id: 2,
    firstName: "Carolina",
    lastName: "Medina",
    email: "Carolina@gmail.com",
    phone: "3109876543",
    isActive: true,
    address: {
      street: "Carrera 45",
      city: "Medellín",
      country: "Colombia",
      postalCode: "050022"
    },
    createdAt: "2025-09-13"
  },
  {
    id: 3,
    firstName: "Maria",
    lastName: "Muñoz",
    email: "Maria@gmail.com",
    phone: "3124567890",
    isActive: true,
    address: {
      street: "Av. Central",
      city: "Cali",
      country: "Colombia",
      postalCode: "760001"
    },
    createdAt: "2025-09-13"
  },
  {
    id: 4,
    firstName: "Isabella",
    lastName: "Pulgarin",
    email: "Isabella@gmail.com",
    phone: "3189876543",
    isActive: true,
    address: {
      street: "Calle 45",
      city: "Barranquilla",
      country: "Colombia",
      postalCode: "080001"
    },
    createdAt: "2025-09-13"
  },
  {
    id: 5,
    firstName: "Carmen",
    lastName: "Muñoz",
    email: "Carmen@gmail.com",
    phone: "3151234567",
    isActive: true,
    address: {
      street: "Carrera 12",
      city: "Bucaramanga",
      country: "Colombia",
      postalCode: "680001"
    },
    createdAt: "2025-09-13"
  }
];


export default function Home() {
  return (
    <div className="container">
      <h1 className="catalog-title">Products Catalog</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.name}</h3>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> {product.price} {product.currency}</p>
            <p><strong>Category:</strong> {product.category.name}</p>
          </div>
        ))}
      </div>

      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email} - {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

