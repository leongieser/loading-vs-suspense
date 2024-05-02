import NewPostBtn from '@/components/NewPostBtn';
import PostsGridSkeleton from './Skeleton';
import PostsGrid from './PostGrid';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
  return (
    <>
      <NewPostBtn />
      <Suspense fallback={<PostsGridSkeleton />}>
        <PostsGrid />
      </Suspense>
    </>
  );
}
