// app/layout.js

export const metadata = {
  title: "Tasker System",
  description: "A task management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
