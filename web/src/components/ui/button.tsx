'use client'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { Link } from '@/components/link'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        unstyled: 'clear m-0 bg-transparent p-0',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export interface ButtonCustomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  title?: string
  url?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  (
    {
      className,
      variant,
      size,
      url,
      icon,
      children,
      title,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={
          'group relative z-10 flex items-center justify-center rounded-md transition-all duration-1000 ease-in-out hover:cursor-pointer hover:bg-opacity-60 hover:text-blue-500 dark:hover:text-orange-500'
        }
        ref={ref}
        {...props}
      >
        {url ? (
          <Link href={url} asChild>
            <div className="flex h-full w-full flex-col items-center justify-center">
              {icon}
              {children}
            </div>
            {title && (
              <div className="before:-left-2 before:-z-10 absolute top-0 left-20 hidden w-auto scale-0 whitespace-nowrap rounded-lg bg-blue-500 px-4 py-2 text-zinc-700 transition-all duration-1000 ease-in-out before:absolute before:h-6 before:w-6 before:rotate-45 before:rounded-md before:bg-blue-500 group-hover:flex group-hover:scale-100 dark:bg-orange-600 dark:text-orange-500 dark:before:bg-orange-600">
                <span className="group-hover:text-white">{title}</span>
              </div>
            )}
          </Link>
        ) : (
          <>
            <div className="flex h-full w-full flex-col items-center justify-center">
              {icon}
              {children}
            </div>
            {title && (
              <div className="before:-left-2 before:-z-10 absolute top-0 left-20 hidden w-auto scale-0 whitespace-nowrap rounded-lg bg-blue-500 px-4 py-2 text-zinc-700 transition-all duration-1000 ease-in-out before:absolute before:h-6 before:w-6 before:rotate-45 before:rounded-md before:bg-blue-500 group-hover:flex group-hover:scale-100 dark:bg-orange-600 dark:text-orange-500 dark:before:bg-orange-600">
                <span className="group-hover:text-white">{title}</span>
              </div>
            )}
          </>
        )}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
ButtonCustom.displayName = 'ButtonCustom'

export { Button, ButtonCustom, buttonVariants }
