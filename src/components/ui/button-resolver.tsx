
import { Button as LocalButton, buttonVariants } from './button.shadcn';
import Button from './Button';

// This file helps resolve the casing differences between Button.tsx and button.shadcn.tsx imports
export { 
  LocalButton,
  Button,
  buttonVariants
};

export type { ButtonProps } from './button.shadcn';
