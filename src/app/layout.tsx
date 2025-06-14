import ThemeProvider from "@/components/Header/ThemeProvider";
import TopBar from "@/components/Header/TopBar";
import "./globals.css";
import FooterLink from "@/components/Footer/FooterLink";

type RootLayoutProviderProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TopBar />
          <main>{children}</main>
          <FooterLink />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
