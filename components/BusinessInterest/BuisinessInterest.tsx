import Wrapper from './Wrapper';

export default function BusinessInterest() {
  return (
    <section className='flex min-h-full w-full flex-col items-center justify-center bg-white p-5 dark:bg-darkPrimary-3 lg:max-w-720'>
      <div className='w-full max-w-442'>
        <h2 className='py-10 text-lg font-semibold text-darkSecondary-900 dark:text-white-800 md:text-3xl md:font-bold'>
          What types of businesses are you most interested in running?
        </h2>
        <p className='text-base font-semibold text-secondary-blue-80'>
          Choose as many as you like.
        </p>
        <Wrapper />
      </div>
    </section>
  );
}
