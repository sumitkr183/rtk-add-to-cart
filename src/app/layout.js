import Header from "@/components/Header";
import "./globals.css";
import CustomProvider from "@/redux/CustomProvider";

export const metadata = {
  title: "Learn Redux Toolkit",
  description: "Learn Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomProvider>
          <Header />
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
