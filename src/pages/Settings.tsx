import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure your AI development environment
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-card/50">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="ai">AI Models</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <Card className="p-6 bg-card/50 border-border/50">
            <h3 className="text-lg font-semibold mb-4">Workspace Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workspace">Workspace Name</Label>
                <Input
                  id="workspace"
                  defaultValue="My Development Workspace"
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="user@example.com"
                  className="bg-background/50"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50">
            <h3 className="text-lg font-semibold mb-4">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-save code</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically save changes while editing
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts for workflow completions
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Dark mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Use dark theme for the interface
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="mt-6 space-y-6">
          <Card className="p-6 bg-card/50 border-border/50">
            <h3 className="text-lg font-semibold mb-4">AI Model Configuration</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="model">Preferred Model</Label>
                <Input
                  id="model"
                  defaultValue="GPT-5"
                  className="bg-background/50"
                  readOnly
                />
                <p className="text-xs text-muted-foreground">
                  Using latest GPT-5 model for optimal code generation
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Code explanations</Label>
                  <p className="text-sm text-muted-foreground">
                    Include detailed comments in generated code
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-debug mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically identify and fix errors
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6 space-y-6">
          <Card className="p-6 bg-card/50 border-border/50">
            <h3 className="text-lg font-semibold mb-4">API Keys</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Manage your integration API keys securely
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Configure GitHub Token
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Configure Slack Webhook
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Configure Notion API Key
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-6">
          <Card className="p-6 bg-card/50 border-border/50">
            <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-factor authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Session timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Auto-logout after 30 minutes of inactivity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button className="shadow-glow">Save Changes</Button>
      </div>
    </div>
  );
}
