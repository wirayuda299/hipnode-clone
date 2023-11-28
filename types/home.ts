import React from 'react';

export interface Post {
  id: number;
  slug: string;
  title: string;
  description: React.ReactNode;
  user: string;
  userJob: string;
  joinDate: string;
  views: number;
  likes: number;
  comments: number;
  name: string;
  createdDate: string;
  avatar: string;
  tags: string[];
  online?: boolean;
  isLiked?: boolean;
  mainImage: string;
  postHeader: string;
  alt: string;
}
