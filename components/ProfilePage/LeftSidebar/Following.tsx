import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const followings = [1, 2, 3, 4, 5, 6, 7, 8];

const Following = () => {
  return (
    <div className='my-5'>
      <p className='body-semibold mb-4 text-darkSecondary-900 dark:text-white-700'>
        Following 47
      </p>

      <div className='flexCenter flex-wrap gap-[10px]'>
        {followings.map((following, i) => (
          <Avatar key={i} className='h-[30px] w-[30px]'>
            <AvatarImage src='https://github.com/shadcn.png' alt='avatar' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export default Following;
