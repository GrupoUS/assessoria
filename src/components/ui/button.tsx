
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#588157] text-white hover:bg-[#4e7048] dark:bg-navy-medium dark:hover:bg-navy-light",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-navy-light dark:hover:bg-navy-dark dark:hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-navy-light/20 dark:text-navy-lightest dark:hover:bg-navy-light/30",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-navy-dark dark:hover:text-navy-lightest",
        link: "text-primary underline-offset-4 hover:underline dark:text-navy-light dark:hover:text-white",
        // New variants for dark mode
        accent: "bg-navy-light text-white hover:bg-navy-medium dark:bg-navy-light dark:hover:bg-navy-light/80",
        subtle: "bg-navy-lightest/10 text-navy-lightest hover:bg-navy-lightest/20 dark:bg-navy-light/10 dark:text-navy-lightest dark:hover:bg-navy-light/20",
        glass: "backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 dark:bg-navy-dark/30 dark:border-navy-light/30 dark:hover:bg-navy-dark/50",
        glow: "bg-navy-dark text-white hover:bg-navy-medium dark:bg-navy-dark dark:hover:bg-navy-medium dark:shadow-[0_0_15px_rgba(119,141,169,0.5)] dark:hover:shadow-[0_0_20px_rgba(119,141,169,0.7)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
