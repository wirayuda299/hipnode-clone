import Image from 'next/image';

export default function ActiveMember() {
  return (
    <section className=' w-full rounded-2xl bg-white p-5 dark:bg-darkPrimary-3'>
      <h3 className='pb-5 text-base font-semibold text-darkSecondary-900 dark:text-white-700'>
        Active Members
      </h3>
      <div className='flex flex-wrap gap-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((activeMember) => (
          <div key={activeMember}>
            <Image
              src={'/assets/images/profile.svg'}
              width={40}
              height={40}
              alt='user'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
