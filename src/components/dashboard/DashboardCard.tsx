import {
  Card,
  CardContent,
  //CardDescription,
  //CardFooter,
  CardHeader,
  //CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 p-4 pb-5">
      <CardHeader>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-5xl font-semibold text-slate-500">{count}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
