import { TrendingUp, Users, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const RightSidebar = () => {
  return (
    <aside className="w-80 h-screen sticky top-16 p-4 overflow-y-auto hidden lg:block">
      
      {/* Trending Questions */}
      <Card className="mb-6 hover-glow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Trending Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "How will the new healthcare bill affect citizens?",
              answers: 23,
              tag: "Healthcare",
              trending: true
            },
            {
              title: "What are the requirements for local business permits?",
              answers: 15,
              tag: "Business",
              trending: false
            },
            {
              title: "Climate change policies in our district?",
              answers: 31,
              tag: "Climate",
              trending: true
            }
          ].map((question, index) => (
            <div key={index} className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <p className="text-sm font-medium text-foreground mb-2 line-clamp-2">
                {question.title}
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  #{question.tag}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {question.answers} answers
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested People */}
      <Card className="mb-6 hover-glow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-primary" />
            People to Follow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              name: "Mayor Sarah Johnson",
              username: "mayor_johnson",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mayor",
              isOfficial: true,
              followers: "12.5k"
            },
            {
              name: "Dr. Michael Chen",
              username: "dr_chen_health",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor",
              isOfficial: false,
              followers: "8.2k"
            },
            {
              name: "City Council Updates",
              username: "citycouncil_official",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=council",
              isOfficial: true,
              followers: "25.1k"
            }
          ].map((person, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-1">
                    <p className="font-medium text-sm">{person.name}</p>
                    {person.isOfficial && (
                      <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                        Official
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">@{person.username}</p>
                  <p className="text-xs text-muted-foreground">{person.followers} followers</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                Follow
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="mb-6 hover-glow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-primary" />
            Civic Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "Town Hall Meeting",
              date: "Dec 15, 2024",
              location: "City Center",
              attendees: 156
            },
            {
              title: "Budget Review Session",
              date: "Dec 20, 2024",
              location: "Online",
              attendees: 89
            },
            {
              title: "Community Forum",
              date: "Jan 5, 2025",
              location: "Community Center",
              attendees: 234
            }
          ].map((event, index) => (
            <div key={index} className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <p className="font-medium text-sm text-foreground mb-1">{event.title}</p>
              <p className="text-xs text-muted-foreground mb-2">
                {event.date} • {event.location}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {event.attendees} interested
                </span>
                <Button size="sm" variant="ghost" className="h-6 text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Platform Info */}
      <Card className="hover-glow">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-foreground">About Debate</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A transparent platform for civic engagement, connecting citizens with officials and promoting fact-based discussions.
            </p>
            <div className="flex justify-center space-x-4 text-xs text-muted-foreground mt-4">
              <Button variant="link" className="h-auto p-0 text-xs">Privacy</Button>
              <Button variant="link" className="h-auto p-0 text-xs">Terms</Button>
              <Button variant="link" className="h-auto p-0 text-xs">Help</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default RightSidebar;