'use client';

import Image from 'next/image';
import Link from 'next/link';

import { GroupSidebar } from '@/types/group-sidebar';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  content: GroupSidebar;
  handleCLick?: () => void;
  selectedContent: GroupSidebar | null;
};

export default function SidebarItem({
  content,
  handleCLick,
  selectedContent,
}: SidebarItemProps) {
  return (
    <div
      onClick={handleCLick}
      className='mb-2 flex w-full cursor-pointer flex-col items-start space-y-5 '
    >
      <div className='h-full w-full flex-1 cursor-pointer rounded-lg bg-secondary-yellow-10 p-3'>
        <div className='flex w-full items-center gap-2'>
          <Image
            className='aspect-auto object-contain'
            src={content.icon}
            alt='growth icon'
            width={20}
            height={20}
          />
          <h2 className='text-lg font-semibold dark:text-darkPrimary-2'>
            {content.label}
          </h2>
        </div>
        <p className='text-left text-xs text-darkSecondary-800'>
          {content.text}
        </p>
      </div>
      <div className=' flex flex-col items-start gap-3'>
        {content.items.slice(0, 3).map((item) => (
          <Link
            key={item.title}
            href='/group/1'
            className={cn(
              'mb-3 w-full flex h-full items-center justify-start gap-x-2 rounded-lg',
            )}
          >
            <Image
              className='aspect-auto bg-transparent object-cover'
              src={item.icon}
              width={34}
              height={34}
              alt={content.label}
            />
            <div className='w-full text-left'>
              <h3 className={cn('text-left text-xs font-semibold')}>
                {content.label}
              </h3>
              <p className='text-left text-[10px] text-darkSecondary-800'>
                {item.text}
              </p>
            </div>
          </Link>
        ))}
        {!selectedContent && (
          <button
            onClick={handleCLick}
            className='w-max rounded-full bg-secondary-purple-20 px-2 py-[2px] text-[9px] font-semibold text-secondary-purple'
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
}
