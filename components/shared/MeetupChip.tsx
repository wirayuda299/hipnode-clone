import Image from 'next/image';
import MeetupDetailsChip from './MeetupDetailsChip';

const MeetupChip = () => {
  return (
    <section className='w-full self-center rounded-2xl bg-white p-5 pb-2.5 dark:bg-darkPrimary-3'>
      <h3
        className='display-semibold mb-5 flex items-baseline
        pb-2.5 text-darkSecondary-900 dark:text-white-800'
      >
        Meetups
        <Image
          className='ml-2'
          src='icons/rightArr.svg'
          alt='rightArr'
          width={12}
          height={10}
        />
      </h3>
      <MeetupDetailsChip />
    </section>
  );
};

export default MeetupChip;
