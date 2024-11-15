import Statistic from "@/components/statisticCard";
import { Package } from "lucide-react";

function Dashboard() {
  return (
    <div className="">
      <h1>Dashboard</h1>
      <Statistic icon={<Package />} title="Ini Statistic" value={123} />
    </div>
  );
}

export default Dashboard;
