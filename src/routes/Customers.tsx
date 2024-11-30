import { columns } from "@/components/columns/product";
import { DataTable } from "@/components/data-table";
import { useSidebar } from "@/components/ui/sidebar";
import { Products } from "@/lib/definition";

function Customers() {
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
      id: 6,
      name: "Cuci Selidmut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
    {
      id: 7,
      name: "Cuci Selimaaut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
    {
      id: 8,
      name: "Cuci Selimut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
    {
      id: 5,
      name: "Cuci Selimdut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
    {
      id: 325,
      name: "Cuci Sealimut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
    {
      id: 225,
      name: "Cucai Selimut",
      price: 35000,
      createdAt: "2024-10-23 17:00:00",
      type: "Per Pcs",
    },
  ];

  return (
    <div className="container box-border peer md:px-10 ">
      <section className="prose mt-6">
        <h2
          data-state={state}
          className=" mb-6 ml-1  min-[1060px]:data-[state=collapsed]:ml-[97px] "
        >
          Customers
        </h2>
      </section>
      <div
        data-state={state}
        className="card min-[1060px]:data-[state=collapsed]:ml-24 xl:w-auto  bg-base-100 min-[1060px]:w-[900px] h-[380px] overflow-auto shadow-lg"
      >
        <div className="card-body">
          <DataTable columns={columns} data={products} searchBy="name" />
        </div>
      </div>
    </div>
  );
}

export default Customers;
