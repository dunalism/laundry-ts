import ConfirmLogout from "@/components/alert-confirm/confirm-logout";
import { columns as baseColumns } from "@/components/columns/product";
import { DataTable } from "@/components/data-table";
import { DialogDemo } from "@/components/dialog/dialogexample";
import { useSidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/lib/AuthProvider";

function ProductsPage() {
  const { state } = useSidebar();
  const { products, token, setProducts, id, setId } = useAuth();

  const deleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const columns = baseColumns(deleteProduct, token, id, setId);

  return (
    <div className="container box-border peer md:px-10 ">
      <section className="prose mt-6">
        <h2
          data-state={state}
          className=" mb-6 ml-1  min-[1060px]:data-[state=collapsed]:ml-[97px] "
        >
          Products
        </h2>
      </section>
      <div
        data-state={state}
        className="card  min-[1060px]:data-[state=collapsed]:ml-24 xl:w-auto  bg-base-100 min-[1060px]:w-[900px] h-[380px] overflow-auto shadow-lg"
      >
        <div className="card-body">
          <DataTable
            columns={columns}
            data={products}
            tableOf="product"
            searchBy="name"
          />
          <ConfirmLogout />
          <DialogDemo />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
