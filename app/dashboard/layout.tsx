import SideNav from '@/app/ui/dashboard/sidenav';
import clsx from 'clsx';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        'flex h-screen flex-col md:flex-row md:overflow-hidden',
        `${inter.className} antialiased`,
      )}
    >
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
