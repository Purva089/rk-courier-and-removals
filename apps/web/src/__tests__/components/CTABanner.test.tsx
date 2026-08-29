import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CTABanner } from '@/components/shared/CTABanner';

describe('CTABanner', () => {
  const defaultProps = {
    title: 'Ready to start?',
    description: 'Join us today.',
    primaryButtonText: 'Sign Up',
    primaryButtonHref: '/signup'
  };

  it('renders title and description', () => {
    render(<CTABanner {...defaultProps} />);
    expect(screen.getByText('Ready to start?')).toBeInTheDocument();
    expect(screen.getByText('Join us today.')).toBeInTheDocument();
  });

  it('renders primary button', () => {
    render(<CTABanner {...defaultProps} />);
    const link = screen.getByRole('link', { name: /sign up/i });
    expect(link).toHaveAttribute('href', '/signup');
  });

  it('renders secondary button when props are provided', () => {
    render(
      <CTABanner 
        {...defaultProps} 
        secondaryButtonText="Learn More" 
        secondaryButtonHref="/about" 
      />
    );
    const primaryLink = screen.getByRole('link', { name: /sign up/i });
    const secondaryLink = screen.getByRole('link', { name: /learn more/i });
    
    expect(primaryLink).toHaveAttribute('href', '/signup');
    expect(secondaryLink).toHaveAttribute('href', '/about');
  });
});
