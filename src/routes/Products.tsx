import DemoPage from "@/components/payments/page";
import { Products } from "@/lib/definition";

function ProductsPage() {
  const products: Products[] = [
    {
      id: 1,
      name: "Cuci Kering",
      price: 15000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Kg",
    },
    {
      id: 2,
      name: "Setrika",
      price: 8000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Kg",
    },
    {
      id: 3,
      name: "Cuci Sepatu",
      price: 30000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pasang",
    },
    {
      id: 4,
      name: "Cuci Helm",
      price: 25000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
    {
      id: 5,
      name: "Cuci Selimut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
  ];

  return (
    <div>
      <div>Products</div>
      <DemoPage />
    </div>
  );
}

export default ProductsPage;
