'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Input } from '../../ui/input';

interface SearchBarProps {
  showSearchBar: boolean;
  setShowSearchBar: (cb: (value: boolean) => boolean) => void;
}

const Searchbar = ({ showSearchBar, setShowSearchBar }: SearchBarProps) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleClick = () => {
    router.push(`?search=${search}`);
  };

  return (
    <div className={`${showSearchBar ? 'block' : 'hidden sm:block'} searchbar`}>
      <Input
        id='text'
        placeholder='Type here to search...'
        className='no-focus searchbar_input'
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='sm:hidden'>
        <AiOutlineClose
          className='closeIcon !dark:text-secondary-purple-20 !text-darkSecondary-800'
          onClick={() => setShowSearchBar((showSearchBar) => !showSearchBar)}
        />
      </div>

      <Image
        src='/assets/navigation/search.svg'
        alt='Search Icon'
        width={20}
        height={20}
        className='searchBarIcon'
        onClick={handleClick}
      />
    </div>
  );
};

export default Searchbar;
