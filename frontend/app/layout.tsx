import "./globals.css";

export const metadata = {
  title: "JobSearch AI",
  description: "AI-powered job search dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
