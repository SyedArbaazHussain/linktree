// DrawerBox.tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface DrawerBoxProps {
  social: {
    name: string;
    link: string;
    icon?: string;
  };
  onSubmit?: () => void;
  triggerLabel?: string;
  submitLabel?: string;
  cancelLabel?: string;
}

export default function DrawerBox({
  social,
  onSubmit,
  triggerLabel = "VIEW",
  submitLabel = "OPEN",
  cancelLabel = "BACK",
}: DrawerBoxProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant={"default"} className="w-full flex gap-2 justify-start cursor-pointer">
          <img
            src={social.icon}
            alt={social.name}
            className="h-5 lg:h-10 lg:py-2 self-center"
          />
          {triggerLabel}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{social.name}</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <img
            src={social.icon}
            alt={social.name}
            className="h-fit w-fit self-center"
          />
          <Button onClick={onSubmit} className="w-[70%] md:w-[40%] self-center">
            <a
              href={social.link}
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {submitLabel}
            </a>
          </Button>
          <DrawerClose>
            <Button
              variant="destructive"
              className="w-[70%] md:w-[40%] self-center mb-[5vh]"
            >
              {cancelLabel}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
