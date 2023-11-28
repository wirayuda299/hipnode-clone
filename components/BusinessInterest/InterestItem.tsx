import { Button } from '../ui/button';

export default function InterestItem({ interest }: { interest: string }) {
  return (
    <Button className='bg-white-700 text-lg font-semibold text-darkSecondary-900 hover:!bg-secondary-red-60 hover:text-white dark:bg-darkPrimary-4 dark:text-white-800'>
      {interest}
    </Button>
  );
}
