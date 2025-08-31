import { Search, Bell, MessageCircle, Users, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl gradient-text hidden sm:inline">Debate</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search debates, questions, or people..."
            className="pl-10 bg-muted/50 border-0 focus:bg-background transition-colors"
          />
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center space-x-2">
          {/* Create Post Button */}
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white border-0 hidden sm:flex">
            <Plus className="h-4 w-4 mr-2" />
            Create
          </Button>

          {/* Navigation Icons */}
          <Button variant="ghost" size="icon" className="relative hover-lift">
            <MessageCircle className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-secondary text-secondary-foreground text-xs">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative hover-lift">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-secondary text-secondary-foreground text-xs">
              7
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="hover-lift">
            <Users className="h-5 w-5" />
          </Button>

          {/* Profile Avatar */}
          <Avatar className="h-8 w-8 avatar-ring cursor-pointer hover-lift">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=civic-user" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;