import { DataTable } from "@/components/data-table";
import { useSidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/lib/AuthProvider";
import { custcols } from "@/components/columns/customers";

function Customers() {
  const { state } = useSidebar();
  const { customers } = useAuth();

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
          <DataTable
            columns={custcols}
            data={customers}
            tableOf="customer"
            searchBy="name"
          />
        </div>
      </div>
    </div>
  );
}

export default Customers;
