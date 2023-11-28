'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import Searchbar from './SearchBar';
import Logo from './Logo';
import NavLinks from './NavLinks';

const TopBar = ({ children }: { children: ReactNode }) => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  return (
    <nav className='topBarContainer'>
      {/* On Mobile: Either show Search Bar (when search icon is clicked) - otherwise show TopBar */}
      <div
        className={`mx-auto ${showSearchBar ? 'block w-full' : 'hidden'} py-3`}
      >
        <Searchbar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
      </div>

      <div className={`topBar ${showSearchBar ? 'hidden' : 'flex'}`}>
        {/* Top Bar Column 1 */}
        <Logo
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />

        {/* Top Bar Column 2 */}
        <div className='topBarCol2'>
          <NavLinks />

          <Searchbar
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
          />

          {/* Profile Section */}
          {children}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
