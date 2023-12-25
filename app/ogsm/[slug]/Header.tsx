import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CopyUrl from "./CopyUrl";
import FavoriteButton from "./FavoriteButton";

interface HeaderProps {
  title: string | undefined;
  creator: string | undefined;
}

const Header = ({ title, creator }: HeaderProps) => {
  return (
    <header className="container mx-auto pt-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/dashboard"
            className="mb-1 flex items-center text-xs text-gray-500"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back
          </Link>
          <h1 className="">{title}</h1>
          <p className="text-xs text-muted-foreground">Created by {creator}</p>
        </div>
        <div className="flex gap-2 text-gray-600">
          <FavoriteButton />
          <CopyUrl>
            <Button className="flex items-center p-2" variant="outline">
              <LinkIcon className="h-5 w-5" />
              <div className="ml-1 text-sm">Share</div>
            </Button>
          </CopyUrl>
        </div>
      </div>
    </header>
  );
};

export { Header };
