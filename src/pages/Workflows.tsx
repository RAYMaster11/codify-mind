import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Play, Pause, Settings } from "lucide-react";

interface WorkflowCardProps {
  name: string;
  description: string;
  status: "active" | "paused";
  triggers: number;
  lastRun: string;
}

function WorkflowCard({ name, description, status, triggers, lastRun }: WorkflowCardProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <Badge variant={status === "active" ? "default" : "secondary"}>
              {status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button size="icon" variant="ghost">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="space-y-1">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{triggers}</span> executions
          </p>
          <p className="text-muted-foreground">Last run: {lastRun}</p>
        </div>
        <Button size="sm" variant={status === "active" ? "outline" : "default"}>
          {status === "active" ? (
            <>
              <Pause className="h-3 w-3 mr-1" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-3 w-3 mr-1" />
              Activate
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}

export default function Workflows() {
  const workflows = [
    {
      name: "Auto Code Review",
      description: "Automatically review pull requests and post feedback comments",
      status: "active" as const,
      triggers: 127,
      lastRun: "2 hours ago",
    },
    {
      name: "Daily Standup Report",
      description: "Generate and send daily team progress reports to Slack",
      status: "active" as const,
      triggers: 45,
      lastRun: "8 hours ago",
    },
    {
      name: "Issue Tracker Sync",
      description: "Sync GitHub issues with Notion project board",
      status: "paused" as const,
      triggers: 203,
      lastRun: "2 days ago",
    },
    {
      name: "Email to Calendar",
      description: "Parse meeting invitations and add them to Google Calendar",
      status: "active" as const,
      triggers: 89,
      lastRun: "1 hour ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Workflows</h1>
          <p className="text-muted-foreground">
            Automate tasks and connect your tools with visual workflows
          </p>
        </div>
        <Button className="shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.name} {...workflow} />
        ))}
      </div>

      {/* Workflow Builder Preview */}
      <Card className="p-8 bg-gradient-dark border-border/50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Visual Workflow Builder</h2>
          <p className="text-muted-foreground mb-6">
            Drag and drop to create powerful automations. Connect triggers, actions, and conditions
            to build custom workflows that fit your team's needs.
          </p>
          <Button variant="outline" size="lg">
            Open Builder
          </Button>
        </div>
      </Card>
    </div>
  );
}
