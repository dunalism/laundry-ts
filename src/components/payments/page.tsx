import { DataTable } from "./data-table";
import { Payment, columns } from "@/components/payments/column";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ];
// }

export default function DemoPage() {
  const data: Payment[] = [
    {
      id: "728edfsd2f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "72fdsdd52f",
      amount: 200,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "72dfdsd52f",
      amount: 800,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728esdfs2f",
      amount: 400,
      status: "pending",
      email: "g@example.com",
    },
    {
      id: "728sdfs52f",
      amount: 500,
      status: "pending",
      email: "w@example.com",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
