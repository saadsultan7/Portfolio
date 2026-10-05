import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatBot from '../components/ChatBot';

describe('ChatBot', () => {
  it('renders the toggle button', () => {
    render(<ChatBot />);
    expect(screen.getByLabelText('Open chat')).toBeInTheDocument();
  });

  it('opens the chat popup when toggle is clicked', () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText('Open chat'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Your Personal AI Assistant')).toBeInTheDocument();
  });

  it('shows the initial greeting message', () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText('Open chat'));
    expect(
      screen.getByText(/Hello! I am the AI assistant for Saad Sultan/)
    ).toBeInTheDocument();
  });

  it('closes the chat when close button is clicked', () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText('Open chat'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Close chat'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has a disabled send button when input is empty', () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText('Open chat'));
    expect(screen.getByLabelText('Send message')).toBeDisabled();
  });

  it('enables send button when input has text', () => {
    render(<ChatBot />);
    fireEvent.click(screen.getByLabelText('Open chat'));
    fireEvent.change(screen.getByLabelText('Chat message input'), {
      target: { value: 'Hello' },
    });
    expect(screen.getByLabelText('Send message')).not.toBeDisabled();
  });
});
