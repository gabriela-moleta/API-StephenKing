import './globals.css';

export const metadata = {
  title: 'Next.js API Project',
  description: 'Um projeto Next.js que consome uma API pública',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}