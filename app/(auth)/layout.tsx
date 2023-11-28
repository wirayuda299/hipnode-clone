import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section className='mx-auto flex min-h-screen w-full max-w-1440 flex-col justify-center lg:flex-row'>
      {children}
    </section>
  );
}
