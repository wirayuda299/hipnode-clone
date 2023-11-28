import Image from 'next/image';

export default function Admins() {
  const admins = [
    {
      name: 'Uiajmad',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'Mandaruiux',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'Jubed Ahmed',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'AR Jakir',
      profileImage: '/assets/images/profile.svg',
    },
    {
      name: 'AR Jakir',
      profileImage: '/assets/images/profile.svg',
    },
  ];
  return (
    <section className='flex w-[210px] flex-col gap-5 rounded-2xl bg-white p-5 text-darkSecondary-900 dark:bg-darkPrimary-3 dark:text-white-800 max-lg:w-full'>
      <h3 className='text-base font-semibold text-darkSecondary-900 dark:text-white-800'>
        Admins
      </h3>
      {admins.map((admin) => (
        <div
          key={admin.name}
          className='flex w-full items-center justify-between gap-x-2'
        >
          <div className='flex items-center gap-x-2'>
            <Image
              src={'/assets/images/profile.svg'}
              width={30}
              height={30}
              alt={admin.name}
            />

            <h3>{admin.name}</h3>
          </div>
          <button className='flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary-blue-10'>
            <Image
              src={'/assets/icons/follow.svg'}
              width={20}
              height={20}
              alt={admin.name}
            />
          </button>
        </div>
      ))}
    </section>
  );
}
