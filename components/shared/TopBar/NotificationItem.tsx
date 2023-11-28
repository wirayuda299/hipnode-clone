'use client';

import Image from 'next/image';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface NotificationItemProps {
  name: string;
  avatar: string;
  typeIcon: string;
  typeText: string;
  text: string;
  title: string;
  date: string;
  time: string;
  isSeen: boolean;
}

const NotificationItem = ({
  name,
  avatar,
  typeIcon,
  typeText,
  text,
  title,
  date,
  time,
  isSeen,
}: NotificationItemProps) => {
  return (
    <div className='mb-[35px]'>
      <div className='notificationContainer'>
        <Avatar className='relative h-[50px] w-[50px]'>
          <AvatarImage
            src={avatar}
            alt='Avatar'
            width={50}
            height={50}
            className='notificationAvatarImage'
          />
          <AvatarFallback className='rounded-full'>HN</AvatarFallback>
          <div className='notificationAvatarIcon'>
            <Image
              src={typeIcon}
              alt='Notification Type Icon'
              width={18}
              height={18}
              className='avatarIconImage'
            />
          </div>
        </Avatar>
        <div className='w-[449px]'>
          <div className='ml-[2px]'>
            <div className='mb-[8px] flex items-center justify-start'>
              <h4 className='bodyMd-semibold sm:display-semibold md:heading3 mr-2 text-darkSecondary-800'>
                {name}
              </h4>
              <h6 className='bodySm-regular md:body-semibold mt-1 text-darkSecondary-800'>
                {typeText}
              </h6>
            </div>
            {text && <h6 className='notificationText'>{text}</h6>}
            <h4
              className={`${
                isSeen ? 'text-darkSecondary-800' : 'text-secondary-red-80'
              } bodyMd-semibold sm:display-semibold md:heading3 mb-1 mr-2 `}
            >
              {title}
            </h4>

            <h6 className='bodySm-regular md:body-regular text-darkSecondary-800'>
              {date}, {time}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
