import { render, fireEvent } from '@testing-library/react';
import CookiesBanner from './index';
import useHandleCookie from './hooks/useHandleCookie';

jest.mock('./hooks/useHandleCookie');

const mockHandleCloseAcceptBanner = jest.fn();
const mockHandleCloseDeclineBanner = jest.fn();

beforeEach(() => {
  (useHandleCookie as jest.Mock).mockReturnValue({
    showBanner: true,
    ref: { current: document.createElement('dialog') },
    handleCloseAcceptBanner: mockHandleCloseAcceptBanner,
    handleCloseDeclineBanner: mockHandleCloseDeclineBanner,
  });
});

test('renders correctly', () => {
  const { getByText } = render(
    <CookiesBanner
      cookiesBannerContent="Test content"
      cookiesBannerAcceptButton="Accept"
      cookiesBannerDeclineButton="Decline"
      cookiesBannerLinkText="Learn more"
    />,
  );

  expect(getByText('Test content')).not.toBeNull();
  expect(getByText('Accept')).not.toBeNull();
  expect(getByText('Decline')).not.toBeNull();
  expect(getByText('Learn more')).not.toBeNull();
});

test('calls handleCloseAcceptBanner on accept button click', () => {
  const { getByText } = render(
    <CookiesBanner
      cookiesBannerContent="Test content"
      cookiesBannerAcceptButton="Accept"
      cookiesBannerDeclineButton="Decline"
      cookiesBannerLinkText="Learn more"
    />,
  );

  fireEvent.click(getByText('Accept'));

  expect(mockHandleCloseAcceptBanner).toHaveBeenCalled();
});

test('calls handleCloseDeclineBanner on decline button click', () => {
  const { getByText } = render(
    <CookiesBanner
      cookiesBannerContent="Test content"
      cookiesBannerAcceptButton="Accept"
      cookiesBannerDeclineButton="Decline"
      cookiesBannerLinkText="Learn more"
    />,
  );

  fireEvent.click(getByText('Decline'));

  expect(mockHandleCloseDeclineBanner).toHaveBeenCalled();
});
