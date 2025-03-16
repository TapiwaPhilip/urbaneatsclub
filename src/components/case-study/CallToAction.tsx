
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const CallToAction = () => {
  return (
    <div className="mt-12 text-center">
      <Link to="/">
        <Button variant="primary" size="lg" withArrow>
          Learn How We Can Help Your Company
        </Button>
      </Link>
    </div>
  );
};

export default CallToAction;
