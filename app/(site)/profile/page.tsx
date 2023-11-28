import {
  OptionBar,
  LeftSidebar,
  Performance,
  PostCard,
  HostMeetupCard,
  Pagination,
} from '@/components/index';
import { cardBtns } from '@/constant';
import { postDummyData } from '@/constants/index';

export default function ProfilePage() {
  return (
    <div className='flex flex-col items-start justify-center gap-6 py-[90px] lg:flex-row lg:py-[100px]'>
      <LeftSidebar />

      <div className='w-full lg:hidden'>
        <HostMeetupCard cardBtns={cardBtns} />
      </div>

      <main className='flex w-full flex-col lg:max-w-[785px]'>
        <OptionBar />
        <div>
          {postDummyData?.map((post) => (
            <PostCard
              id=''
              emailAddress=''
              username=''
              key={post.id}
              authorName={''}
              title={post.title}
              tags={[]}
              views={post.views}
              postImage={post.mainImage}
              createdAt={post.createdDate}
              avatar={post.avatar}
              comments={[]}
              online={post.online}
              likes={[]}
            />
          ))}
          <Pagination totalPages={20} />
        </div>
      </main>

      <aside className='flex w-full flex-col gap-5 lg:sticky lg:top-[100px] lg:max-w-[325px]'>
        <div className='hidden lg:block'>
          <HostMeetupCard cardBtns={cardBtns} />
        </div>

        <Performance />
      </aside>
    </div>
  );
}
