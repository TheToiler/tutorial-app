// Lucide imports
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

// Local imports
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/PostsTable";
import AnalyticsChart from "@/components/AnalyticsCharts";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <div className="flex justify-between gap-5 mb-5">
        <DashboardCard
          title="Postjes"
          count={60}
          icon={<Newspaper size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Categories"
          count={10}
          icon={<Folder size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle size={72} className="text-slate-500" />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable limit={5} title="Latest Posts" />
    </>
  );
}
