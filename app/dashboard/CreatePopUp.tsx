import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface DialogInfo {
  CreateFunc: (title: string) => void;
}
export default function DialogDemo({ CreateFunc }: DialogInfo) {
  const [name, setName] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new OGSM</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create</DialogTitle>
          <DialogDescription>Create a new OGSM Board.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        {
          name != "" && //Hide create button if title is empty
          <DialogFooter>
           <DialogClose asChild>
              <Button type="submit" onClick={() => CreateFunc(name)}>
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        }
      </DialogContent>
    </Dialog>
  );
}
