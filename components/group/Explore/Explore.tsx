import Image from 'next/image';

import { Button } from '@/components/ui/button';
import NewIcon from './Icon';

export default function Explore() {
  return (
    <section className='mt-5 w-full'>
      <div className='flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-white p-5 dark:bg-darkPrimary-3'>
        <h4 className='text-base font-semibold text-darkSecondary-900 dark:text-white-800'>
          Explore
        </h4>
        <div className='flex items-center gap-5 max-sm:w-full'>
          <Button className='inline-flex w-24 gap-2 truncate bg-white-800 hover:bg-white-700 dark:bg-darkPrimary-4 dark:hover:bg-darkPrimary-3 max-sm:w-full'>
            <NewIcon />
            <span className='text-xs font-bold text-darkSecondary-900 dark:text-white'>
              New
            </span>
          </Button>
          <Button className='group inline-flex w-24 gap-2 truncate bg-secondary-red-10 hover:bg-secondary-red-60 dark:bg-secondary-red-10 max-sm:w-full'>
            <Image
              className='aspect-auto object-contain'
              src={'/assets/icons/popular.svg'}
              width={20}
              height={20}
              alt='popular icon'
            />
            <span className=' text-xs font-bold text-secondary-red-80 group-hover:text-white-700 '>
              Popular
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
