import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  status: "connected" | "available";
  category: string;
}

export function IntegrationCard({ name, description, icon: Icon, status, category }: IntegrationCardProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold">{name}</h3>
            <Badge variant={status === "connected" ? "default" : "outline"} className="text-xs">
              {status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <Button 
              size="sm" 
              variant={status === "connected" ? "outline" : "default"}
              className="ml-auto"
            >
              {status === "connected" ? "Configure" : "Connect"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
