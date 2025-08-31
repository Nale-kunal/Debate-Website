import { Image, HelpCircle, Smile, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CreatePost = () => {
  return (
    <Card className="post-card mb-6">
      <div className="flex items-start space-x-4">
        <Avatar className="h-12 w-12 avatar-ring">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=current-user" />
          <AvatarFallback>YU</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <Tabs defaultValue="post" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="post" className="flex items-center gap-2">
                <Smile className="h-4 w-4" />
                Share Thoughts
              </TabsTrigger>
              <TabsTrigger value="question" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Question
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="post">
              <Textarea
                placeholder="What's happening in your community?"
                className="min-h-[120px] resize-none border-0 focus-visible:ring-0 text-base"
              />
            </TabsContent>
            
            <TabsContent value="question">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Question title..."
                  className="w-full text-lg font-semibold bg-transparent border-0 outline-none placeholder:text-muted-foreground"
                />
                <Textarea
                  placeholder="Describe your question in detail..."
                  className="min-h-[100px] resize-none border-0 focus-visible:ring-0"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                <Image className="h-4 w-4 mr-2" />
                Media
              </Button>
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                <MapPin className="h-4 w-4 mr-2" />
                Location
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">280 chars left</span>
              <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white">
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;