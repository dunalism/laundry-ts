import { DataTable } from "@/components/data-table";
import { useSidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/lib/AuthProvider";
import { transctcols } from "@/components/columns/transactions";

function Transactions() {
  const { state } = useSidebar();
  const { totalTransc } = useAuth();

  return (
    <div className="container box-border peer md:px-10 ">
      <section className="prose mt-6">
        <h2
          data-state={state}
          className=" mb-6 ml-1  min-[1060px]:data-[state=collapsed]:ml-[97px] "
        >
          Transactions
        </h2>
      </section>
      <div
        data-state={state}
        className="card min-[1060px]:data-[state=collapsed]:ml-24 xl:w-auto  bg-base-100 min-[1060px]:w-[900px] h-[380px] overflow-auto shadow-lg"
      >
        <div className="card-body">
          <DataTable
            columns={transctcols}
            data={totalTransc}
            tableOf="transaction"
            searchBy="custName"
          />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
