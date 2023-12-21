import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface ProjectCardProps {
  ogsm: any;
}

const ProjectCard = ({ ogsm }: ProjectCardProps) => {
  return (
    <Link href={`/ogsm/${ogsm.slug}`}>
      <Card>
        <CardHeader>
          <h3 className="text-sm tracking-tight">{ogsm.title}</h3>
          <p className="text-xs text-muted-foreground">
            Created by {ogsm.creator.name}
          </p>
        </CardHeader>
      </Card>
    </Link>
  );
};

export { ProjectCard };
