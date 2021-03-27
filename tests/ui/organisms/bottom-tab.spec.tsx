import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import BottomTabs from '@ns/ui/components/organisms/bottom-tab/bottom-tab';

describe('Bottom Tab', () => {
  test('Should start with home page rendered', () => {
    const { queryAllByTestId } = render(<BottomTabs />);
    const homePageSelectors = queryAllByTestId('home-btn');
    waitFor(() => homePageSelectors);
    expect(homePageSelectors.length).toBe(1);
  });
});
