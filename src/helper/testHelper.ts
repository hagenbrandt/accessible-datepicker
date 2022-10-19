import { cleanup, render, screen } from '@testing-library/react';
import { HtmlRole } from '../types/type';

// eslint-disable-next-line jest/no-export, no-undef
export const makeSnapshotTest = (component: JSX.Element, roleQuery?: HtmlRole) => {
  it('matches snapshot', () => {
    cleanup();

    if (!roleQuery) {
      const { container } = render(component);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(container).toMatchSnapshot();
      return cleanup();
    }

    render(component);
    expect(screen.getByRole(roleQuery)).toMatchSnapshot();
    return cleanup();
  });
};
