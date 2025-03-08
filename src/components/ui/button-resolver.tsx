
import { Button as ShadcnButton, buttonVariants } from './button.shadcn';
import Button from './Button';
import { Slot } from "@radix-ui/react-slot";

// This file helps resolve the casing differences between Button.tsx and button.shadcn.tsx imports
export { 
  ShadcnButton,
  Button,
  buttonVariants,
  Slot
};

export type { ButtonProps } from './button.shadcn';
export type { ButtonProps as CustomButtonProps } from './Button';
