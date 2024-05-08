import "./globals.css";

export const metadata = {
  title: "Landing&Task",
  description: "A landing + task webpage/app as per request",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>
        {children}
        </body>
    </html>
  );
}
