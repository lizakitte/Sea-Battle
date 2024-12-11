import { AuthProvider } from "@/app/_lib/AuthContext";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import "./styles/layoutStyle.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="nav-top">
          <ul>
            <li>
              <Link href="/user/register">Register</Link>
            </li>
            <li>
              <Link href="/user/signin">Login</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="nav-left">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="news.asp">News</a>
              </li>
              <li>
                <a href="contact.asp">Contact</a>
              </li>
              <li>
                <a href="about.asp">About</a>
              </li>
            </ul>
          </div>
          <div className="main-content">
            <AuthProvider>{children}</AuthProvider>
            <footer>
              <img src="wsei-logo.png" style={{margin:'auto', height:'30px'}}></img>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
