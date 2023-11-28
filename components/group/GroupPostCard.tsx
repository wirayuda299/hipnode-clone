import Image from 'next/image';

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';

const actionsButtons = [
  '/assets/icons/heart.svg',
  '/assets/icons/comment.svg',
  '/assets/icons/share.svg',
];

export default function GroupPostCard() {
  return (
    <Card className='mb-5 rounded-xl border-none p-2 dark:bg-darkPrimary-3 max-sm:w-full sm:w-250'>
      <CardHeader className='p-2'>
        <CardTitle className='flex items-center gap-3'>
          <Image
            src={'/assets/images/profile.svg'}
            width={50}
            height={50}
            alt='profile'
          />
          <div>
            <h3 className='text-xs font-semibold text-darkSecondary-900 dark:text-white-800'>
              Looking to Partner Up
            </h3>
            <p className='text-10 font-normal text-darkSecondary-900 dark:text-white-800'>
              Sayem Ahmed
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-2'>
        <Image
          className='w-full object-cover'
          src={'/assets/images/cat.png'}
          width={500}
          height={500}
          alt={'cat'}
        />
        <div className='flex gap-3 py-3'>
          {actionsButtons.map((btn) => (
            <button key={btn}>
              <Image
                className='aspect-auto object-contain'
                src={btn}
                width={20}
                height={20}
                alt='icon'
              />
            </button>
          ))}
        </div>
        <h3 className='text-sm font-semibold dark:text-white-800'>
          Database Backups as a Service?
        </h3>
        <CardDescription className='pt-2 text-xs font-normal leading-relaxed dark:text-white-800'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a,
          corrupti nesciunt, illum beatae ex esse in quam labore deserunt
          placeat nihil voluptatum. Ratione odit eius minima. Eligendi, sint
          cum!
        </CardDescription>
      </CardContent>
      <p className='p-2 text-left text-xs text-darkSecondary-800 dark:text-white-800'>
        wed, 15 Fabruary 2022
      </p>
    </Card>
  );
}
