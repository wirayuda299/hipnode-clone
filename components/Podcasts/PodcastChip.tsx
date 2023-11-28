'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

interface PodcastProps {
  podcastData: {
    title: string;
    description: string;
    avatar: string;
    location: string;
    author: string;
  };
}

const PodcastChip = ({ podcastData }: PodcastProps) => {
  return (
    <section className='mb-3 w-full overflow-hidden rounded-2xl bg-white p-5 transition-all hover:shadow-md dark:bg-darkPrimary-3'>
      <h3 className='heading3 mb-2.5 text-darkSecondary-900 dark:text-white'>
        {podcastData.title}
      </h3>
      <p className='body-regular text-darkSecondary-800 dark:text-white-700'>
        {podcastData.description}
      </p>

      <main className='mt-5 flex items-center'>
        <Avatar>
          <AvatarImage
            className='w-8 rounded-full'
            src='https://github.com/shadcn.png'
            alt='user-ava'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='ml-2.5'>
          <h4 className='body-semibold text-darkSecondary-900 dark:text-white'>
            Moshkur Alom
          </h4>
          <p className='bodySm-regular text-darkSecondary-800'>
            Sylhet, Bangladesh
          </p>
        </div>
      </main>
    </section>
  );
};

export default PodcastChip;
