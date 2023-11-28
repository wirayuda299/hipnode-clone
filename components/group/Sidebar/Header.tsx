import Image from 'next/image';

type HeaderProps = {
  label: string;
  text: string;
  icon: string;
};

export default function Header({ icon, text, label }: HeaderProps) {
  return (
    <div className='h-full !w-full flex-1 cursor-pointer rounded-lg bg-secondary-yellow-10 p-3'>
      <div className='flex items-center gap-2'>
        <Image
          className='aspect-auto object-contain'
          src={icon}
          alt='growth icon'
          width={20}
          height={20}
        />
        <h2 className='text-lg font-semibold'>{label}</h2>
      </div>
      <p className='text-left text-xs text-darkSecondary-800'>{text}</p>
    </div>
  );
}
