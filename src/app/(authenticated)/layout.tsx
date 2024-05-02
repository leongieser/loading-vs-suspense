import { Navigation } from './Navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 gap-5">
      <Navigation />
      {children}
    </div>
  );
}
