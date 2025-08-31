import PostCard from "@/components/PostCard";
import QuestionCard from "@/components/QuestionCard";
import CreatePost from "@/components/CreatePost";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter, TrendingUp } from "lucide-react";

const samplePosts = [
  {
    author: {
      name: "Mayor Sarah Johnson",
      username: "mayor_johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mayor",
      verified: true,
      isOfficial: true,
    },
    content: "Excited to announce our new green infrastructure initiative! 🌱 We're investing $2.5M in renewable energy and sustainable transportation. This will create 500+ jobs while reducing our carbon footprint by 30%. #ClimateAction #CivicProgress",
    timestamp: "2h",
    likes: 342,
    comments: 67,
    shares: 89,
    factCheck: {
      status: "verified" as const,
      confidence: 95,
      source: "City Budget Office"
    }
  },
  {
    author: {
      name: "Alex Rivera",
      username: "alex_civic",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      verified: true,
    },
    content: "The new healthcare bill claims to reduce costs by 40%, but I've analyzed the data and the actual savings might be closer to 15-20%. We need more transparency in policy projections. What do you think?",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    timestamp: "4h",
    likes: 156,
    comments: 43,
    shares: 28,
    factCheck: {
      status: "disputed" as const,
      confidence: 72,
      source: "Independent Health Policy Institute"
    }
  },
  {
    author: {
      name: "Community Watch",
      username: "communitywatch",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=community",
      verified: false,
    },
    content: "Beautiful sunset at our local park! This is why we need to protect our green spaces. The upcoming vote on park funding is crucial for maintaining places like this for future generations. 🌅",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    timestamp: "6h",
    likes: 89,
    comments: 12,
    shares: 15,
  },
];

const sampleQuestions = [
  {
    id: "1",
    author: {
      name: "Maria Rodriguez",
      username: "maria_concerned",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      verified: false,
    },
    title: "How will the new healthcare bill affect small business owners?",
    description: "I own a small restaurant with 8 employees. The new healthcare legislation seems complex, and I'm worried about compliance costs and coverage requirements. Can someone explain the specific impacts on businesses with fewer than 10 employees?",
    tags: ["Healthcare", "SmallBusiness", "Policy"],
    timestamp: "3h",
    upvotes: 47,
    answers: 12,
    views: 234,
    hasAcceptedAnswer: false,
    factCheck: {
      status: "verified" as const,
      confidence: 88,
      source: "Department of Health"
    }
  },
  {
    id: "2",
    author: {
      name: "Anonymous Citizen",
      username: "anon_user",
      avatar: "",
      verified: false,
    },
    title: "What are the requirements for obtaining a local business permit?",
    description: "I'm planning to open a small bakery in downtown. What permits do I need, what's the process, and how long does it typically take? Any recent changes to the requirements?",
    tags: ["Business", "Permits", "LocalGov"],
    timestamp: "5h",
    upvotes: 23,
    answers: 8,
    views: 156,
    hasAcceptedAnswer: true,
    isAnonymous: true,
  },
  {
    id: "3",
    author: {
      name: "Dr. Michael Chen",
      username: "dr_chen_env",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor",
      verified: true,
    },
    title: "Climate change adaptation strategies for our coastal city?",
    description: "Given rising sea levels and increasing storm intensity, what specific measures is our city taking to adapt? Are we investing in flood barriers, updated building codes, or emergency preparedness?",
    tags: ["Climate", "Infrastructure", "Planning"],
    timestamp: "1d",
    upvotes: 78,
    answers: 15,
    views: 445,
    hasAcceptedAnswer: false,
    factCheck: {
      status: "verified" as const,
      confidence: 92,
      source: "Climate Science Institute"
    }
  },
];

const Index = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Create Post */}
      <CreatePost />

      {/* Feed Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="trending">
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </TabsTrigger>
          </TabsList>
          
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <TabsContent value="all" className="space-y-6">
          {/* Mixed feed of posts and questions */}
          <PostCard {...samplePosts[0]} />
          <QuestionCard {...sampleQuestions[0]} />
          <PostCard {...samplePosts[1]} />
          <QuestionCard {...sampleQuestions[1]} />
          <PostCard {...samplePosts[2]} />
          <QuestionCard {...sampleQuestions[2]} />
        </TabsContent>

        <TabsContent value="questions" className="space-y-6">
          {sampleQuestions.map((question) => (
            <QuestionCard key={question.id} {...question} />
          ))}
        </TabsContent>

        <TabsContent value="trending" className="space-y-6">
          {/* Show trending posts and questions */}
          <PostCard {...samplePosts[0]} />
          <QuestionCard {...sampleQuestions[0]} />
          <QuestionCard {...sampleQuestions[2]} />
        </TabsContent>
      </Tabs>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg" className="hover-lift">
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default Index;
