'use client';

import type { FormEvent } from 'react';
import { useUser } from '@clerk/nextjs';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

import { Input } from '../ui/input';
import { filterWords, formUrlQuery } from '@/lib/utils';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { toast } from '../ui/use-toast';

export default function CreatePostInput() {
  const params = useSearchParams();
  const router = useRouter();
  const user = useUser();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const titleInput = form.elements.namedItem('title') as HTMLInputElement;
    const containBadWords = filterWords(titleInput.value);

    if (containBadWords) {
      toast({
        title: 'Please use more appropriate language.',
        variant: 'destructive',
      });
      return;
    }
    const urlQuery = formUrlQuery(params.toString(), 'title', titleInput.value);
    router.push(`/create-post${urlQuery as string}`);
  };

  return (
    <form className='barContainer' onSubmit={onSubmit}>
      <Avatar>
        <Image
          src={user?.user?.imageUrl ?? ''}
          width={50}
          height={50}
          className='w-16 !rounded-full'
          alt={user?.user?.username ?? ''}
        />
        <AvatarFallback>{user?.user?.username ?? ''}</AvatarFallback>
      </Avatar>
      <Input
        name='title'
        required
        maxLength={150}
        type='text'
        placeholder="Let's share what's going on in your mind..."
        className='barInput bodySm-regular md:body-regular'
      />
      <Button className='barButton'>Create Post</Button>
    </form>
  );
}
