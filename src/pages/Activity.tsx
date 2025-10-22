import { Card } from "@/components/ui/card";
import { ActivityItem } from "@/components/ActivityItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertCircle, Loader2, Code2, Zap, Plug } from "lucide-react";

export default function Activity() {
  const activities = [
    {
      title: "React Component Generated",
      description: "Created UserProfile component with TypeScript",
      time: "2 minutes ago",
      icon: Code2,
      status: "success" as const,
    },
    {
      title: "Workflow Execution",
      description: "Daily standup report workflow running",
      time: "5 minutes ago",
      icon: Loader2,
      status: "pending" as const,
    },
    {
      title: "API Integration Error",
      description: "GitHub API rate limit exceeded",
      time: "12 minutes ago",
      icon: AlertCircle,
      status: "error" as const,
    },
    {
      title: "Code Review Complete",
      description: "Auto review posted 3 comments on PR #245",
      time: "28 minutes ago",
      icon: CheckCircle2,
      status: "success" as const,
    },
    {
      title: "Slack Message Sent",
      description: "Team notification delivered successfully",
      time: "1 hour ago",
      icon: Zap,
      status: "success" as const,
    },
    {
      title: "Integration Connected",
      description: "Notion workspace linked successfully",
      time: "2 hours ago",
      icon: Plug,
      status: "success" as const,
    },
    {
      title: "Workflow Failed",
      description: "Email parser workflow encountered an error",
      time: "3 hours ago",
      icon: AlertCircle,
      status: "error" as const,
    },
    {
      title: "Code Generation",
      description: "Generated API endpoints for user management",
      time: "4 hours ago",
      icon: Code2,
      status: "success" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Activity Log</h1>
        <p className="text-muted-foreground">
          Monitor all system activities and track workflow executions
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-card/50">
          <TabsTrigger value="all">All Activity</TabsTrigger>
          <TabsTrigger value="success">Success</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="error">Errors</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card className="p-2 bg-card/50 backdrop-blur-sm border-border/50">
            {activities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </Card>
        </TabsContent>

        <TabsContent value="success" className="mt-6">
          <Card className="p-2 bg-card/50 backdrop-blur-sm border-border/50">
            {activities
              .filter((a) => a.status === "success")
              .map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="mt-6">
          <Card className="p-2 bg-card/50 backdrop-blur-sm border-border/50">
            {activities
              .filter((a) => a.status === "pending")
              .map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
          </Card>
        </TabsContent>

        <TabsContent value="error" className="mt-6">
          <Card className="p-2 bg-card/50 backdrop-blur-sm border-border/50">
            {activities
              .filter((a) => a.status === "error")
              .map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
