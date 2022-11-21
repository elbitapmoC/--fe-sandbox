import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Code Sandbox App" />
        <title>Code Sandbox | 🏝</title>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
