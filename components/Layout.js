import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-5xl flex flex-col min-h-full m-4 p-4 border">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
