import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface CreateOgsmButtonProps {
  createOgsmCallback: (name: string) => void;
}

const CreateOgsmButton = ({ createOgsmCallback }: CreateOgsmButtonProps) => {
  const [title, setTitle] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new OGSM</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Create new Ogsm</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <Label htmlFor="name" className="ml-6 flex items-center gap-2">
              Title
              <Input
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Label>
          </div>
          <DialogFooter>
            {title.length > 0 ? (
              <DialogClose asChild>
                <Button type="submit" onClick={() => createOgsmCallback(title)}>
                  Create
                </Button>
              </DialogClose>
            ) : (
              <h1 className="text-right text-xs text-red-600">
                *To create a new OGSM board, please enter a title.
              </h1>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { CreateOgsmButton };
