interface CookiesLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: CookiesLayoutProps) {
  return <>{children}</>;
}
