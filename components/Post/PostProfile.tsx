import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface postProfileProps {
  avatar: string;
  user: string;
  userJob: string;
  joinDate: string;
}

const PostProfile = ({ avatar, user, userJob, joinDate }: postProfileProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 rounded-2xl bg-white px-5 py-7 dark:bg-darkPrimary-3'>
      <Avatar className='h-20 w-20 rounded-full bg-secondary-purple-20 lg:h-24 lg:w-24'>
        <AvatarImage src={avatar} />
        <AvatarFallback className='!bg-secondary-purple-20'>HN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col items-center justify-center gap-0.5 text-center'>
        <p className='heading3 lg:heading1-semibold text-darkSecondary-900 dark:text-white-800'>
          {user}
        </p>
        <div className='display-semibold text-darkSecondary-800'>{userJob}</div>
      </div>
      <button
        type='button'
        className='flex w-full items-center justify-center gap-2.5 rounded-md bg-blue-500 p-2.5'
      >
        <p className='heading3 text-white'>Follow</p>
      </button>
      <p className='display-regular text-darkSecondary-800'>
        joined {joinDate}
      </p>
    </div>
  );
};

export default PostProfile;
