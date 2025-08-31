import { Home, MessageSquare, Users, TrendingUp, Bookmark, Settings, HelpCircle, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { icon: Home, label: "Home", active: true, badge: null },
  { icon: MessageSquare, label: "Questions", active: false, badge: "12" },
  { icon: TrendingUp, label: "Trending", active: false, badge: null },
  { icon: Users, label: "Following", active: false, badge: "3" },
  { icon: Bookmark, label: "Saved", active: false, badge: null },
  { icon: Shield, label: "Fact-Check Center", active: false, badge: null },
];

const settingsItems = [
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help", active: false },
  { icon: FileText, label: "Privacy Policy", active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen sticky top-16 p-4 overflow-y-auto">
      {/* Navigation */}
      <nav className="space-y-2 mb-8">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start h-12 px-4 ${
                item.active 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge className="ml-auto bg-secondary text-secondary-foreground">
                  {item.badge}
                </Badge>
              )}
            </Button>
          );
        })}
      </nav>

      {/* Trending Topics */}
      <Card className="mb-6 p-4">
        <h3 className="font-semibold text-foreground mb-3">Trending Topics</h3>
        <div className="space-y-2">
          {[
            { tag: "LocalElections", posts: "2.3k posts" },
            { tag: "ClimatePolitics", posts: "1.8k posts" },
            { tag: "HealthcareDebate", posts: "1.2k posts" },
            { tag: "CivicEngagement", posts: "856 posts" },
          ].map((topic, index) => (
            <Button key={index} variant="ghost" className="w-full justify-start p-2 h-auto">
              <div className="text-left">
                <p className="font-medium text-sm">#{topic.tag}</p>
                <p className="text-xs text-muted-foreground">{topic.posts}</p>
              </div>
            </Button>
          ))}
        </div>
      </Card>

      {/* Settings */}
      <div className="space-y-1">
        {settingsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-10 px-3 text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              <Icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © 2024 Debate Platform. Promoting transparent civic discourse.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;