'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  showSearchBar: boolean;
  setShowSearchBar: (cb: (value: boolean) => boolean) => void;
}

const Logo = ({ showSearchBar, setShowSearchBar }: LogoProps) => {
  return (
    <div className='mr-4 flex shrink-0 items-center'>
      <Link href='/'>
        <Image
          src='/logo-icon-light.svg'
          alt='Logo Icon'
          width={30}
          height={30}
          className='logoIcon'
        />
      </Link>

      {/* Search Icon - shows on mobile */}
      <Image
        src='/assets/navigation/search.svg'
        alt='Search Icon'
        width={20}
        height={20}
        className={`${
          showSearchBar ? 'hidden sm:block' : 'block sm:hidden'
        } searchIcon`}
        onClick={() => setShowSearchBar((showSearchBar) => !showSearchBar)}
      />

      <Link href='/' className='ml-2.5 hidden items-center lg:flex'>
        <h1 className='md:heading2 lg:heading1 text-primary'>Hipnode</h1>
        <span className='heading1 text-darkSecondary dark:text-white'>.</span>
      </Link>
    </div>
  );
};

export default Logo;
