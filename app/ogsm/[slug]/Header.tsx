import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpOnSquareIcon,
  EyeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import FavoriteButton from "./FavoriteButton";

type Props = { title: string | undefined; creator: string | undefined };
export default function Header({ title, creator }: Props) {
  return (
    <div>
      <header className="border-b">
        <div className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="text-xs text-muted-foreground">
                Created by {creator}
              </p>
            </div>
            <div className="flex gap-2 text-gray-600">
              <FavoriteButton />
              <Button className="flex items-center p-2" variant="outline">
                <ArrowUpOnSquareIcon className="h-5 w-5" />
                <div className="ml-1 text-sm">Share</div>
              </Button>
              <Select defaultValue="editing">
                <SelectTrigger className="w-32">
                  <SelectValue className="select-none" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="editing">
                    <div className="flex select-none items-center">
                      <PencilSquareIcon className="mr-2 h-5 w-5" />
                      Editing
                    </div>
                  </SelectItem>
                  <SelectItem value="viewing">
                    <div className="flex select-none items-center">
                      <EyeIcon className="mr-2 h-5 w-5" />
                      Viewing
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
