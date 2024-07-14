import Footer from "./footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="pb-14">
        {children}
      </div>
      <Footer />
    </div>
  );
}
