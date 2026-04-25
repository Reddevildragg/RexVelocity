import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 md:px-10 lg:px-12 w-full", className)}>
      {children}
    </div>
  );
};
