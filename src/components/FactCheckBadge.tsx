import { CheckCircle, AlertTriangle, XCircle, Info, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface FactCheckBadgeProps {
  status: "verified" | "disputed" | "false";
  confidence: number;
  source: string;
}

const FactCheckBadge = ({ status, confidence, source }: FactCheckBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "verified":
        return {
          icon: CheckCircle,
          label: "Fact-Checked: True",
          className: "verified-badge",
          color: "text-success"
        };
      case "disputed":
        return {
          icon: AlertTriangle,
          label: "Fact-Checked: Disputed",
          className: "disputed-badge",
          color: "text-warning"
        };
      case "false":
        return {
          icon: XCircle,
          label: "Fact-Checked: False",
          className: "false-badge",
          color: "text-destructive"
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="p-0 h-auto">
          <Badge className={`fact-check-badge ${config.className} cursor-pointer hover:opacity-80 transition-opacity`}>
            <Icon className="h-3 w-3" />
            {config.label}
            <Info className="h-3 w-3 ml-1" />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Icon className={`h-4 w-4 ${config.color}`} />
              Fact-Check Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">Status: {config.label.split(': ')[1]}</p>
              <p className="text-xs text-muted-foreground">
                Confidence: {confidence}%
              </p>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-1">Source Verification</p>
              <p className="text-xs text-muted-foreground mb-2">
                This information has been cross-referenced with trusted sources and government databases.
              </p>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                <ExternalLink className="h-3 w-3 mr-1" />
                View Sources
              </Button>
            </div>

            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Verified by: {source} • Independent fact-checking network
              </p>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default FactCheckBadge;