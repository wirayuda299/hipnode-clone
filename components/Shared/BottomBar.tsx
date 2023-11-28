'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/constants/navLinks';

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {navLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && 'bg-primary'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={25}
                height={25}
                className={`object-contain dark:brightness-200 ${
                  isActive && 'brightness-200'
                }`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
