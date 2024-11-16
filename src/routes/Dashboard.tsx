import StatisticCard from "@/components/statisticCard";
import {
  Users,
  Users2,
  ClockArrowDown,
  Package,
  Clock8,
  PackageCheck,
} from "lucide-react";

function Dashboard() {
  return (
    <main className="flex flex-col box-border ">
      <section className="prose mb-5 mt-[-1rem] ">
        <h2>Dashboard</h2>
      </section>
      <section className="grid grid-cols-3 gap-4">
        <StatisticCard
          Icon={<Users />}
          iconColor="bg-red-500"
          title="Users"
          total={3}
        />
        <StatisticCard
          Icon={<Users2 />}
          iconColor="bg-green-500"
          title="Customers"
          total={10}
        />
        <StatisticCard
          Icon={<Package />}
          iconColor="bg-blue-500"
          title="Orders"
          total={19}
        />
        <StatisticCard
          Icon={<Clock8 />}
          iconColor="bg-cyan-500"
          title="Pending"
          total={0}
        />
        <StatisticCard
          Icon={<ClockArrowDown />}
          iconColor="bg-fuchsia-500"
          title="Processed"
          total={0}
        />
        <StatisticCard
          Icon={<PackageCheck />}
          iconColor="bg-emerald-500"
          title="Completed"
          total={19}
        />
      </section>
    </main>
  );
}

export default Dashboard;
