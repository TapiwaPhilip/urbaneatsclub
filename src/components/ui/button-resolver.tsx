
import { Button as LocalButton } from './button.shadcn';
import Button from './Button';

// Export buttonVariants from the shadcn button component
export const { buttonVariants } = require('./button.shadcn');

// This file helps resolve the casing differences between Button.tsx and button.tsx imports
export { 
  LocalButton,
  Button
};
