import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Miroslav Nekhaev | Backend Developer",
  description:
    "Portfolio of Miroslav Nekhaev — Backend Developer specializing in Java, Spring Boot, Python, Django, REST APIs, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-foreground antialiased scroll-smooth transition-colors duration-200"
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 opacity-40">
          <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
          <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />
        </div>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
