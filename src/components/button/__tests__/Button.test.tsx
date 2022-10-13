import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '../Button';

describe('Button', () => {
  const buttonText = 'Click here';
  const buttonValue = '42';
  const mockClick = jest.fn();
  const renderButton = (isDisabled: boolean) =>
    render(
      <Button
        buttonText={buttonText}
        buttonValue={buttonValue}
        onClick={mockClick}
        isDisabled={isDisabled}
      />,
    );

  beforeEach(() => {
    renderButton(false);
  });

  it('renders a button tag', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has a given display-text', () => {
    expect(screen.getByRole('button')).toHaveTextContent(buttonText);
  });

  it('has a given value', () => {
    expect(screen.getByRole('button')).toHaveAttribute('value', buttonValue);
  });

  it('calls a given function onClick', () => {
    fireEvent.click(screen.getByRole('button'));

    expect(mockClick).toHaveBeenCalled();
  });

  it('is disabled when prop is set to true', () => {
    cleanup();
    renderButton(true);

    expect(screen.getByRole('button')).toBeDisabled();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
    expect(mockClick).not.toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    expect(screen.getByRole('button')).toMatchSnapshot();
  });
});
