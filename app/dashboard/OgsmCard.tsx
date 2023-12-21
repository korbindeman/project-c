import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface OgsmCardProps {
  ogsm: any;
}

const OgsmCard = ({ ogsm }: OgsmCardProps) => {
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

export { OgsmCard };
