import type { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen px-4 py-8 container mx-auto">
        {children}
      </main>
      <footer className=" border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 text-center mx-auto text-gray-400">
          <p>This is the footer Yo!</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
