import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Download, Share2 } from "lucide-react";

export default function Editor() {
  const [code] = useState(`import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-muted-foreground mb-6">
          This is a live preview of your generated code.
        </p>
        <div className="flex items-center gap-4">
          <Button onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </Button>
          <Button variant="outline">
            Secondary Action
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;`);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Code Editor</h1>
          <p className="text-muted-foreground">
            Edit and preview your generated code in real-time
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button className="shadow-glow">
            <Play className="h-4 w-4 mr-2" />
            Run
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
        {/* Code Panel */}
        <Card className="overflow-hidden bg-card/50 border-border/50">
          <Tabs defaultValue="code" className="h-full flex flex-col">
            <div className="border-b border-border/50 px-4">
              <TabsList className="bg-transparent">
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="styles">Styles</TabsTrigger>
                <TabsTrigger value="config">Config</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="code" className="flex-1 m-0 p-0">
              <div className="h-full overflow-auto">
                <pre className="p-4 h-full bg-code-bg">
                  <code className="text-sm font-mono text-foreground/90">
                    {code}
                  </code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="styles" className="flex-1 m-0 p-0">
              <div className="h-full overflow-auto">
                <pre className="p-4 h-full bg-code-bg">
                  <code className="text-sm font-mono text-foreground/90">
                    {`/* Global Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  background: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
}

.button {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}`}
                  </code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="config" className="flex-1 m-0 p-0">
              <div className="h-full overflow-auto">
                <pre className="p-4 h-full bg-code-bg">
                  <code className="text-sm font-mono text-foreground/90">
                    {`{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^3.4.1"
  }
}`}
                  </code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Preview Panel */}
        <Card className="overflow-hidden bg-card/50 border-border/50">
          <div className="border-b border-border/50 px-4 py-2 flex items-center justify-between">
            <h3 className="text-sm font-medium">Live Preview</h3>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
          </div>
          <div className="h-[calc(100%-3rem)] overflow-auto bg-background/50">
            {/* Mock Preview */}
            <div className="p-8">
              <Card className="p-6">
                <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
                <p className="text-muted-foreground mb-6">
                  This is a live preview of your generated code.
                </p>
                <div className="flex items-center gap-4">
                  <Button>Clicked 0 times</Button>
                  <Button variant="outline">Secondary Action</Button>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
