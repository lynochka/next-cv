import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-6xl flex flex-col min-h-full m-2 p-4">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
