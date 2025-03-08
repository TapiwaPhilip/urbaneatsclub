
import { Button as ShadcnButton, buttonVariants } from './button.shadcn';
import Button from './Button';
import { Slot } from "@radix-ui/react-slot";

// Re-export the ButtonProps from both button components
import type { ButtonProps as ShadcnButtonProps } from './button.shadcn';
import type { ButtonProps } from './Button';

// This file helps resolve the casing differences between Button.tsx and button.shadcn.tsx imports
export { 
  ShadcnButton,
  Button,
  buttonVariants,
  Slot
};

export type { ShadcnButtonProps, ButtonProps };
export type { ButtonProps as CustomButtonProps } from './Button';
