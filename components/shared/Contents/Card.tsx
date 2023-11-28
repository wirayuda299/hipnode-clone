import Image from 'next/image';

import { cn } from '@/lib/utils';

type ContentCardProps = {
  background: string;
  icon?: string;
  alt?: string;
  text: string;
  position: 'left' | 'right';
  cardBg: string;
};

export default function ContentCard({
  background,
  cardBg,
  position,
  text,
  alt,
  icon,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        `group flex h-full w-full max-w-500 items-center justify-start gap-6 rounded-lg bg-white p-5 dark:bg-darkPrimary-3 ${
          position === 'right' ? 'hover:!bg-secondary-red-60' : ''
        }`,
        cardBg,
      )}
    >
      {icon && (
        <div
          className={cn(
            `flex aspect-square w-10 h-10 md:h-60 md:w-60 items-center justify-center rounded-lg dark:bg-darkPrimary-4`,
            background,
          )}
        >
          <Image
            className='h-5 w-5 object-contain'
            src={icon}
            width={50}
            height={50}
            alt={alt ?? ''}
          />
        </div>
      )}
      <p
        className={`text-sm font-semibold leading-5 text-darkSecondary-900  dark:text-white-800 md:text-lg ${
          position === 'right' ? 'group-hover:text-white' : ''
        }`}
      >
        {text}
      </p>
    </div>
  );
}
