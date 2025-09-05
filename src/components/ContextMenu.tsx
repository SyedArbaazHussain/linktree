import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { socials } from "@/components/Contacts";

export default function ContextMenuBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="h-screen w-full">{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        {socials.map((social) => (
          <ContextMenuItem>
            <div>
              <a
                href={social.link}
                key={social.name}
                className="flex items-center gap-2"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="max-h-4 w-fit text-black dark:text-white"
                />
                {social.name}
              </a>
            </div>
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
