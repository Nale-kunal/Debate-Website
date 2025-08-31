import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import FactCheckBadge from "./FactCheckBadge";

interface PostCardProps {
  author: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
    isOfficial?: boolean;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  factCheck?: {
    status: "verified" | "disputed" | "false";
    confidence: number;
    source: string;
  };
}

const PostCard = ({ author, content, image, timestamp, likes, comments, shares, factCheck }: PostCardProps) => {
  return (
    <Card className="post-card hover-glow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12 avatar-ring">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-foreground">{author.name}</h3>
              {author.verified && (
                <CheckCircle className="h-4 w-4 text-primary" />
              )}
              {author.isOfficial && (
                <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                  Official
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">@{author.username} · {timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-foreground leading-relaxed">{content}</p>
        {image && (
          <img 
            src={image} 
            alt="Post content" 
            className="mt-3 rounded-lg w-full h-auto max-h-96 object-cover"
          />
        )}
      </div>

      {/* Fact Check */}
      {factCheck && (
        <div className="mb-4">
          <FactCheckBadge {...factCheck} />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 transition-colors">
            <Heart className="h-4 w-4 mr-2" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-4 w-4 mr-2" />
            {comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
            <Share2 className="h-4 w-4 mr-2" />
            {shares}
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default PostCard;