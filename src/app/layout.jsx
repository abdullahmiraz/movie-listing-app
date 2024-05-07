import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header/Header";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar/Navbar";
import SearchBox from "@/components/Search/SearchBox";
import { AuthContextProvider } from "@/context/AuthContext";

export const metadata = {
  title: "movie-listing-app",
  description: "Movie Listing Appp using next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Provider>
            {/* HEADER SECTION */}
            <Header />

            {/* NAVIGATION SECTION */}
            <Navbar />

            {/* SEARCH BOX */}
            <SearchBox />

            {children}
            <Analytics />
          </Provider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
