import { Header } from './Header';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <Navigation className="row-span-full" />

      <div className="col-start-2 bg-gray-100 px-20">
        <Header />
        <main className="grid-cols-2">{children}</main>
      </div>
    </div>
  );
};
