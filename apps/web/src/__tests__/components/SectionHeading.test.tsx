import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeading } from '@/components/shared/SectionHeading';

describe('SectionHeading', () => {
  it('renders the title correctly', () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the subtitle if provided', () => {
    render(<SectionHeading title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('applies centered class when centered prop is true', () => {
    const { container } = render(<SectionHeading title="Centered" centered />);
    // Check if the container div has text-center class
    const div = container.querySelector('.text-center');
    expect(div).toBeInTheDocument();
  });
});
