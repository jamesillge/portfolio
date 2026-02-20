import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import * as React from "react";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-dvh w-screen flex-col bg-white dark:bg-black overflow-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
