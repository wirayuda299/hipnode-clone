"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex w-[53px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white-700 data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-darkPrimary-2 dark:data-[state=unchecked]:bg-darkPrimary-2 relative",
        className
      )}
      {...props}
      ref={ref}
    >
      <BsMoonFill
        size={12}
        className='absolute left-[28px] z-50 ml-1 cursor-pointer text-darkSecondary-700 dark:text-secondary-red-90'
      />
      <BsSunFill
        size={12}
        className='absolute left-[2px] z-50 ml-1 cursor-pointer text-secondary-red-90 dark:text-darkSecondary-700'
      />
      <SwitchPrimitives.Thumb
        className={cn(
          "block h-[25px] w-[25px] rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 dark:bg-darkPrimary"
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
