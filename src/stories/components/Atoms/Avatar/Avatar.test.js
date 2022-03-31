import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from './Avatar';

describe('test avatar comp', () => {
  it('display avatar comp with proper alt text', () => {
    const { unmount } = render(<Avatar type={'anon'} />);
    const avatar = screen.getByAltText(/anon avatar img/i);
    expect(avatar).toBeInTheDocument();
    unmount();
  });
});
