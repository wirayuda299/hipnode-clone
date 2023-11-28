import Image from 'next/image';

export default function Statistic() {
  return (
    <div className='flex items-center justify-start gap-[25px]'>
      <div>
        <p className='text-sm font-bold leading-snug text-darkSecondary-900 dark:text-white-800'>
          $23k/mo
        </p>
        <span className='block text-xs font-normal leading-18 text-neutral-400'>
          Revenue
        </span>
      </div>
      <div>
        <p className='text-sm font-bold leading-snug text-darkSecondary-900 dark:text-white-800'>
          27
        </p>
        <span className='block text-xs font-normal leading-18 text-neutral-400'>
          Updates
        </span>
      </div>
      <div className='inline-flex flex-col items-start justify-start'>
        <Image
          className='invert dark:invert-0'
          src={'/assets/icons/web.svg'}
          width={20}
          height={20}
          alt='web icon'
        />
        <p className='text-xs font-normal leading-18 text-neutral-400'>
          Website
        </p>
      </div>
    </div>
  );
}
