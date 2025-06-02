
import React from 'react';
import { Button } from '@/components/ui/button';

const ButtonVariants = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button Variants</h2>
        <p className="text-muted-foreground">A showcase of all available button variants with dark mode support.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-md space-y-4">
          <h3 className="font-medium">Standard Variants</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        
        <div className="p-4 border rounded-md space-y-4">
          <h3 className="font-medium">Dark Mode Variants</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="accent">Accent</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="glass" className="glass-effect">Glass</Button>
            <Button variant="glow" className="glow-effect">Glow</Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-md space-y-4">
          <h3 className="font-medium">Sizes</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <Button variant="default" size="sm">Small</Button>
            <Button variant="default" size="default">Default</Button>
            <Button variant="default" size="lg">Large</Button>
            <Button variant="default" size="icon">
              <span className="sr-only">Icon</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="p-4 border rounded-md space-y-4">
          <h3 className="font-medium">With Icons</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
              Add New
            </Button>
            <Button variant="accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </Button>
          </div>
        </div>
        
        <div className="p-4 border rounded-md space-y-4">
          <h3 className="font-medium">States</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="default" disabled>Disabled</Button>
            <Button variant="default" className="opacity-50 cursor-not-allowed">
              Loading...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonVariants;
