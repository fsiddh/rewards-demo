import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { CustomFieldSettings } from '../CustomFieldSettings';

describe('<CustomFieldSettings />', () => {
  const mockProps = {
    className: 'test-class',
    heading: 'Test Heading',
  };

  it('should render without crashing', () => {
    render(<CustomFieldSettings {...mockProps} />);
    expect(document.querySelector('.test-class')).toBeInTheDocument();
  });

  it('should render with correct heading', () => {
    render(<CustomFieldSettings {...mockProps} />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('should render with default props', () => {
    render(<CustomFieldSettings />);
    const row = document.querySelector('.ant-row');
    expect(row).toBeInTheDocument();
    expect(row.className).not.toContain('test-class');
    expect(screen.queryByText('Test Heading')).not.toBeInTheDocument();
  });
});
