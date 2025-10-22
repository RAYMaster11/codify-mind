import { IntegrationCard } from "@/components/IntegrationCard";
import { Github, Mail, FileText, MessageSquare, Database, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const integrations = [
  {
    name: "GitHub",
    description: "Sync code repositories, manage pull requests, and automate deployments",
    icon: Github,
    status: "connected" as const,
    category: "Development",
  },
  {
    name: "Gmail",
    description: "Send emails, manage inbox, and automate email workflows",
    icon: Mail,
    status: "available" as const,
    category: "Communication",
  },
  {
    name: "Notion",
    description: "Create pages, update databases, and sync project documentation",
    icon: FileText,
    status: "connected" as const,
    category: "Productivity",
  },
  {
    name: "Slack",
    description: "Post messages, manage channels, and integrate team notifications",
    icon: MessageSquare,
    status: "available" as const,
    category: "Communication",
  },
  {
    name: "Google Sheets",
    description: "Read and write data, create reports, and automate spreadsheet tasks",
    icon: Database,
    status: "available" as const,
    category: "Data",
  },
  {
    name: "Google Calendar",
    description: "Schedule meetings, manage events, and sync team calendars",
    icon: Calendar,
    status: "available" as const,
    category: "Productivity",
  },
];

export default function Integrations() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    integration.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Integrations</h1>
        <p className="text-muted-foreground">
          Connect your favorite tools and platforms to automate workflows
        </p>
      </div>

      <Input
        placeholder="Search integrations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md bg-card/50 border-border/50"
      />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-card/50">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="connected">Connected</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredIntegrations.map((integration) => (
              <IntegrationCard key={integration.name} {...integration} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="connected" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredIntegrations
              .filter((i) => i.status === "connected")
              .map((integration) => (
                <IntegrationCard key={integration.name} {...integration} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="available" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredIntegrations
              .filter((i) => i.status === "available")
              .map((integration) => (
                <IntegrationCard key={integration.name} {...integration} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
