import { StatCard } from "@/components/StatCard";
import { ActivityItem } from "@/components/ActivityItem";
import { Code2, Zap, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-dark border border-border/50 p-8">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="relative">
          <h1 className="text-4xl font-bold mb-2">Welcome to DevAI Studio</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Your AI-powered development environment for building, automating, and deploying applications
          </p>
          <div className="flex gap-3">
            <Button size="lg" className="shadow-glow">
              Start New Project
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Projects Generated"
          value="24"
          icon={Code2}
          trend="+12% this week"
          trendUp={true}
        />
        <StatCard
          title="Active Workflows"
          value="8"
          icon={Zap}
          trend="3 running now"
          trendUp={true}
        />
        <StatCard
          title="API Calls Today"
          value="1,247"
          icon={Clock}
          trend="+23% from yesterday"
          trendUp={true}
        />
        <StatCard
          title="Success Rate"
          value="99.2%"
          icon={CheckCircle2}
          trend="Excellent"
          trendUp={true}
        />
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="space-y-2">
          <ActivityItem
            title="Code Generation Complete"
            description="React component for user dashboard created successfully"
            time="2 minutes ago"
            icon={CheckCircle2}
            status="success"
          />
          <ActivityItem
            title="Workflow Executing"
            description="GitHub integration syncing repository changes"
            time="5 minutes ago"
            icon={Loader2}
            status="pending"
          />
          <ActivityItem
            title="API Integration Failed"
            description="Slack webhook returned 401 error - authentication required"
            time="12 minutes ago"
            icon={AlertCircle}
            status="error"
          />
          <ActivityItem
            title="Deployment Success"
            description="Production build deployed to Vercel successfully"
            time="1 hour ago"
            icon={CheckCircle2}
            status="success"
          />
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
          <Code2 className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Generate Code</h3>
          <p className="text-sm text-muted-foreground">
            Describe your feature in natural language and let AI create it
          </p>
        </Card>
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-colors cursor-pointer">
          <Zap className="h-8 w-8 text-accent mb-4" />
          <h3 className="text-lg font-semibold mb-2">Create Workflow</h3>
          <p className="text-sm text-muted-foreground">
            Automate tasks across your connected platforms
          </p>
        </Card>
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-success/50 transition-colors cursor-pointer">
          <CheckCircle2 className="h-8 w-8 text-success mb-4" />
          <h3 className="text-lg font-semibold mb-2">Connect Integration</h3>
          <p className="text-sm text-muted-foreground">
            Link your tools: GitHub, Notion, Slack, and more
          </p>
        </Card>
      </div>
    </div>
  );
}
