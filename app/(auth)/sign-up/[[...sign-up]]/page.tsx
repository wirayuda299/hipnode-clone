import { SignUp } from '@clerk/nextjs';

import { Contents } from '@/components/index';
import { signupContents } from '@/constant';

export default function Signup() {
  return (
    <>
      <Contents
        position='left'
        title='Join a thriving community of entrepreneurs and developers.'
        contents={signupContents}
      />
      <div className='flex w-full items-center justify-center py-10 dark:bg-darkPrimary-3'>
        <SignUp redirectUrl={'/current-stage'} />
      </div>
    </>
  );
}
