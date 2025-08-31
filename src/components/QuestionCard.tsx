import { MessageCircle, ArrowUp, Share2, Bookmark, CheckCircle, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import FactCheckBadge from "./FactCheckBadge";

interface QuestionCardProps {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  title: string;
  description: string;
  tags: string[];
  timestamp: string;
  upvotes: number;
  answers: number;
  views: number;
  hasAcceptedAnswer?: boolean;
  isAnonymous?: boolean;
  factCheck?: {
    status: "verified" | "disputed" | "false";
    confidence: number;
    source: string;
  };
}

const QuestionCard = ({ 
  author, 
  title, 
  description, 
  tags, 
  timestamp, 
  upvotes, 
  answers, 
  views, 
  hasAcceptedAnswer, 
  isAnonymous,
  factCheck 
}: QuestionCardProps) => {
  return (
    <Card className="post-card hover-glow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {isAnonymous ? (
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <Users className="h-6 w-6 text-muted-foreground" />
            </div>
          ) : (
            <Avatar className="h-12 w-12 avatar-ring">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-foreground">
                {isAnonymous ? 'Anonymous Citizen' : author.name}
              </h3>
              {!isAnonymous && author.verified && (
                <CheckCircle className="h-4 w-4 text-primary" />
              )}
              {hasAcceptedAnswer && (
                <Badge className="text-xs bg-success text-success-foreground">
                  Answered
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{isAnonymous ? 'Anonymous' : `@${author.username}`}</span>
              <span>·</span>
              <Clock className="h-3 w-3" />
              <span>{timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Title & Content */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-foreground mb-2 leading-tight">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Fact Check */}
      {factCheck && (
        <div className="mb-4">
          <FactCheckBadge {...factCheck} />
        </div>
      )}

      {/* Stats & Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowUp className="h-4 w-4 mr-2" />
            {upvotes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-4 w-4 mr-2" />
            {answers} answers
          </Button>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{views} views</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;