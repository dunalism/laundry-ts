import { DataTable } from "@/components/data-table";
import { columns } from "@/components/productColumns";
import { useSidebar } from "@/components/ui/sidebar";
import { Products } from "@/lib/definition";

function ProductsPage() {
  const { state } = useSidebar();
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
    {
      id: 5,
      name: "Cuci Selimut",
      price: 35000,
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
    {
      id: 5,
      name: "Cuci Selimut",
      price: 35000,
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
    {
      id: 5,
      name: "Cuci Selimut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
  ];

  return (
    <div className="container relative peer px-10 ">
      <h2 className="text-xl mb-6 ml-1 font-semibold ">Products</h2>
      <div
        data-state={state}
        className="card data-[state=collapsed]:left-[69px]  relative bg-base-100  shadow-lg"
      >
        <div className="card-body">
          <DataTable columns={columns} data={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
