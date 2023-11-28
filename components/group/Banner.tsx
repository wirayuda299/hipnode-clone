import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function Banner() {
  return (
    <section className=' w-full flex-1 rounded-2xl bg-white p-3 dark:bg-darkPrimary-3 md:p-5'>
      <Image
        className='h-full min-h-[200px] w-full rounded-2xl object-cover object-center'
        src={'/assets/images/banner.png'}
        sizes='100vw'
        width={765}
        height={200}
        priority
        fetchPriority='high'
        alt='banner'
      />
      <div className='flex flex-wrap items-center justify-between gap-5 pt-5'>
        <div className='flex items-center gap-3 md:gap-5'>
          <Image
            className='w-[70px] object-contain'
            src={'/assets/images/logo.png'}
            width={50}
            height={50}
            alt='group logo'
          />

          <div className='text-darkSecondary-900 dark:text-white-800'>
            <h2 className='text-base font-semibold lg:text-3xl '>
              Design Discussion
            </h2>
            <p className='text-10 font-normal dark:text-darkSecondary-800 md:text-sm'>
              Created by{' '}
              <span className='font-semibold dark:text-white-800'>
                {' '}
                AR Jakir
              </span>
            </p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger className='flex h-10 w-20 items-center justify-center gap-2 rounded bg-white-700 hover:bg-white-800 dark:bg-darkPrimary-4 dark:hover:bg-darkPrimary-2 max-sm:w-full'>
            <Image
              src={'/assets/icons/leave.svg'}
              width={20}
              height={19}
              alt='leave icon'
            />
            <span className='font-semibold text-darkSecondary-800'>Leave</span>
          </DialogTrigger>
          <DialogContent className='flex justify-center bg-white dark:bg-darkPrimary-4'>
            <DialogHeader>
              <DialogTitle className='text-center text-lg text-darkSecondary-900 dark:text-white-800 sm:text-left'>
                Are You Sure to Leave From This Group?
              </DialogTitle>
              <div className='flex items-center gap-5 pt-[30px]'>
                <Button className='w-[160px] !bg-secondary-blue !text-white hover:bg-secondary-blue-90 max-sm:w-full'>
                  Leave Group
                </Button>
                <DialogClose className='w-[160px] bg-transparent text-lg text-darkSecondary-800 hover:bg-transparent max-sm:w-full'>
                  Cancel
                </DialogClose>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
