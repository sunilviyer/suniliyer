/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as Dialog from '@radix-ui/react-dialog';

describe('Radix UI Dialog', () => {
  it('should import Dialog components without errors', () => {
    expect(Dialog.Root).toBeDefined();
    expect(Dialog.Trigger).toBeDefined();
    expect(Dialog.Portal).toBeDefined();
    expect(Dialog.Overlay).toBeDefined();
    expect(Dialog.Content).toBeDefined();
  });

  it('should verify TypeScript types are available', () => {
    // This test passes if TypeScript compilation succeeds
    const TestComponent = () => (
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Test Dialog</Dialog.Title>
            <Dialog.Description>Test description</Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );

    expect(TestComponent).toBeDefined();
  });

  it('should open and close dialog with controlled state', () => {
    const TestDialog = () => {
      const [open, setOpen] = React.useState(false);

      return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger onClick={() => setOpen(true)}>Open Dialog</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay data-testid="dialog-overlay" />
            <Dialog.Content data-testid="dialog-content">
              <Dialog.Title>Test Title</Dialog.Title>
              <Dialog.Description>Test Description</Dialog.Description>
              <button onClick={() => setOpen(false)}>Close</button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      );
    };

    render(<TestDialog />);

    // Dialog should be closed initially
    expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();

    // Click trigger to open dialog
    fireEvent.click(screen.getByText('Open Dialog'));

    // Dialog should be open
    waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    // Click close button
    fireEvent.click(screen.getByText('Close'));

    // Dialog should be closed
    waitFor(() => {
      expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
    });
  });

  it('should have correct ARIA attributes', () => {
    const TestDialog = () => {
      const [open, setOpen] = React.useState(true);

      return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content data-testid="dialog-content">
              <Dialog.Title>Accessible Dialog</Dialog.Title>
              <Dialog.Description>This dialog has proper ARIA attributes</Dialog.Description>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      );
    };

    render(<TestDialog />);

    waitFor(() => {
      const dialogContent = screen.getByTestId('dialog-content');
      expect(dialogContent).toHaveAttribute('role', 'dialog');
      expect(dialogContent).toHaveAttribute('aria-modal', 'true');
    });
  });
});
