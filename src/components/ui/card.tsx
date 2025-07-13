import React from "react";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className="rounded-sm border-2 border-border bg-white p-[1px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
    >
      <div
        className={cn("h-[100%] rounded-sm bg-background", className)}
        {...props}
      />
    </div>
  );
}

function CardHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 relative grid auto-rows-min items-start gap-1.5 border-b border-border bg-accent px-3 py-1",
        className,
      )}
      {...props}
    >
      {children}
      <Button
        size="icon"
        className="absolute right-2 top-2 size-5"
        variant="secondary"
      >
        <X />
      </Button>
    </div>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-xl text-primary", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-md pb-2 text-accent-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("p-3", className)} {...props} />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("[.border-t]:pt-6 flex items-center px-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
