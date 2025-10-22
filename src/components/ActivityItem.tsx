import { LucideIcon } from "lucide-react";

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  status: "success" | "error" | "pending";
}

export function ActivityItem({ title, description, time, icon: Icon, status }: ActivityItemProps) {
  const statusColors = {
    success: "text-success",
    error: "text-destructive",
    pending: "text-warning"
  };

  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
      <div className={`p-2 rounded-lg bg-${status === 'success' ? 'success' : status === 'error' ? 'destructive' : 'warning'}/10`}>
        <Icon className={`h-4 w-4 ${statusColors[status]}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  );
}
