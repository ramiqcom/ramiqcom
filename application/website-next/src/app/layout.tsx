import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `Ramadhan | Remote Sensing Data Scientist`,
  description: `Portfolio of Ramadhan: remote sensing projects, research papers, and tutorials on biomass, land cover, and geospatial web apps.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
