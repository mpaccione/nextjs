import Nav from "./components/nav";
import Provider from "./provider"
import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "Testing out Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}