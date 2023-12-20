import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ConfirmDeleteProps {
  children: React.ReactNode;
  deleteCallback: () => void;
}
const ConfirmDelete = ({ children, deleteCallback }: ConfirmDeleteProps) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm delete</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant={"destructive"} onClick={deleteCallback}>
            Delete
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { ConfirmDelete };
