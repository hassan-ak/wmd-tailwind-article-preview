import './globals.css';

export const metadata = {
  title: 'Flex & Grid',
  description: 'Flex and Grid examples built using Tailwind',
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
