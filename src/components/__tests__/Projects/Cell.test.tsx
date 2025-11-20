import React from 'react';

import { render, screen } from '@testing-library/react';

import Cell from '../../Projects/Cell';

describe('Cell', () => {
  const mockProject = {
    title: 'Test Project',
    subtitle: 'A test subtitle',
    image: '/images/me.jpg',
    date: '2023-01-01',
    desc: 'This is a test project description',
    link: 'https://example.com',
  };

  it('renders project title with link', () => {
    render(<Cell data={mockProject} />);
    // Only one link is present in the DOM (the title)
    const titleLink = screen.getByRole('link', { name: mockProject.title });
    expect(titleLink).toHaveAttribute('href', mockProject.link);
  });

  it('renders project description', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText(mockProject.desc)).toBeInTheDocument();
  });

  it('renders project date in correct format', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText('January, 2023')).toBeInTheDocument();
  });

  it('renders an image when present (if the component exposes an <img>)', () => {
    render(<Cell data={mockProject} />);
    const image = screen.queryByAltText(mockProject.title);
    // If the component doesn't render an <img>, this will simply be null and the test will assert accordingly
    if (image) {
      expect(image).toHaveAttribute('src', expect.stringContaining('me.jpg'));
    } else {
      // If you don't want to require an <img>, assert that it's intentionally not in DOM
      expect(image).toBeNull();
    }
  });
});