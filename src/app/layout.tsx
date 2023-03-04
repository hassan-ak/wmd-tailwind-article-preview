import './globals.css';

export const metadata = {
  title: 'Article Preview',
  description: 'Article Preview card built using Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
