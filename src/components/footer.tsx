import { cn } from "@/lib/utils";
import { X } from "@/assets/icons/x";
import { Link } from "react-router-dom";
import { Dock, DockIcon } from "./ui/dock";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";
import { Github } from "@/assets/icons/github";
import { Home, TrendingUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full pb-8 text-center">
      <TooltipProvider>
        <Dock
          className="gap-3 rounded-full hover:gap-0"
          magnification={70}
          distance={300}
          direction="middle"
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={"/"}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full p-8 transition-all duration-200"
                  )}
                >
                  <Home />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={"/trending"}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full p-8 transition-all duration-200"
                  )}
                >
                  <TrendingUp />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Trending</TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator
            orientation="vertical"
            className="h-3/4 bg-neutral-600 dark:bg-white/70"
          />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={"https://x.com/munadil_xd"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full p-8 transition-all duration-200"
                  )}
                >
                  <X />
                </Link>
              </TooltipTrigger>
              <TooltipContent>X / Twitter</TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={"https://github.com/munadil-dev"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full p-8 transition-all duration-200"
                  )}
                >
                  <Github />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </footer>
  );
};

export default Footer;
