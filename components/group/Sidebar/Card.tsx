import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type CardProps = {
  icon: string;
  title: string;
  text: string;
  style?: string;
};

export default function Card({ icon, title, text, style }: CardProps) {
  return (
    <Link
      href='/group/1'
      className={cn(
        'mb-3 inline-flex h-full items-center justify-start gap-x-2 rounded-lg',
        style,
      )}
    >
      <Image
        className='aspect-auto bg-transparent object-cover'
        src={icon}
        width={34}
        height={34}
        alt={title}
      />
      <div className='w-full text-left'>
        <h3 className={cn('text-left text-xs font-semibold', style)}>
          {title}
        </h3>
        <p className='truncate text-left text-10 text-darkSecondary-800'>
          {text}
        </p>
      </div>
    </Link>
  );
}
