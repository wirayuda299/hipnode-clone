import type { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

type ItemListProps = {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
};

export default function ItemList({ items, setItems }: ItemListProps) {
  if (items?.length < 1) return;

  return (
    <div className='flex flex-wrap items-center gap-5'>
      {items?.slice(0, 3).map((admin) => (
        <Button
          type='button'
          className='group relative w-20 bg-white-800 text-darkPrimary-2 hover:bg-white-700 dark:bg-darkPrimary-4 dark:text-white-800 dark:hover:bg-darkPrimary-3'
          key={admin}
        >
          <Image
            src={'/assets/icons/trash.svg'}
            width={20}
            height={20}
            alt='trash icon'
            className='absolute -right-1 -top-1 hidden h-3 w-3 cursor-pointer group-hover:block dark:invert'
            onClick={() =>
              setItems((prev) => prev.filter((current) => current !== admin))
            }
          />

          {admin}
        </Button>
      ))}
    </div>
  );
}
