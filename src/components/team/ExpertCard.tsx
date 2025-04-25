
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Expert } from "@/types/expert.types";

interface ExpertCardProps {
  expert: Expert;
}

const ExpertCard = ({ expert }: ExpertCardProps) => {
  const hasLinkedIn = Boolean(expert.linkedIn);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-softplatinum border-transparent hover:border-royalgold/20 rounded-2xl relative group hover:shadow-glow-gold flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <AspectRatio ratio={1 / 1} className="bg-midnight/5">
          <Avatar className="h-full w-full rounded-none">
            {expert.imageSrc ? (
              <AvatarImage 
                src={expert.imageSrc} 
                alt={expert.name}
                className="object-cover object-center"
                loading="lazy"
              />
            ) : (
              <AvatarFallback className="text-5xl h-full w-full bg-gradient-to-br from-midnight/10 to-royalgold/10 text-midnight">
                {expert.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className={`absolute inset-0 ${hasLinkedIn ? 'bg-midnight/70' : 'bg-midnight/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
            {hasLinkedIn ? (
              <Button 
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-royalgold text-royalgold hover:bg-royalgold hover:text-midnight font-montserrat tracking-wide"
                asChild
              >
                <a href={expert.linkedIn} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> Connect
                </a>
              </Button>
            ) : (
              <Button 
                variant="ghost"
                size="lg"
                className="border border-royalgold text-royalgold opacity-80 cursor-not-allowed font-montserrat tracking-wide pointer-events-none"
                disabled
              >
                <Linkedin className="mr-2 h-5 w-5" /> Connect
              </Button>
            )}
          </div>
        </AspectRatio>
      </div>
      
      <CardContent className="p-6 flex-grow bg-white z-10">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl text-midnight">{expert.name}</h3>
            {hasLinkedIn && (
              <a 
                href={expert.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-royalgold hover:text-midnight transition-colors"
                title={`LinkedIn profile of ${expert.name}`}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn profile of {expert.name}</span>
              </a>
            )}
          </div>
          <p className="text-sm font-semibold text-royalgold">{expert.title}</p>
          <div className="flex items-center pt-1">
            <Badge 
              variant="outline" 
              className="bg-transparent border-midnight/20 text-midnight/80"
            >
              {expert.location}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
