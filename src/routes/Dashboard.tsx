import StatisticCard from "@/components/statisticCard";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Users,
  Users2,
  ClockArrowDown,
  Package,
  Clock8,
  PackageCheck,
} from "lucide-react";

function Dashboard() {
  const { state } = useSidebar();
  return (
    <main className=" flex p-7 ml-3 flex-col  box-border ">
      <section className="prose mb-5 mt-[-1rem] ">
        <h2 data-state={state} className="data-[state=collapsed]:ml-[75px] ">
          Dashboard
        </h2>
      </section>
      <section
        data-state={state}
        className="grid sm:grid-cols-2 min-[1177px]:grid-cols-3 gap-4 data-[state=collapsed]:ml-[70px] "
      >
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
