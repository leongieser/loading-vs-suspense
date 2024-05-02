export default async function PostsGridSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-2 animate-pulse">
      {new Array(20).fill(null).map((_, index) => (
        <div key={index} className="bg-gray-200 h-40 w-40 rounded-md"></div>
      ))}
    </div>
  );
}
