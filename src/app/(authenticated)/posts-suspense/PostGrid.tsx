import Image from 'next/image';

export default async function PostsGrid() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="grid grid-cols-4 gap-2">
      {new Array(20).fill(null).map((_, index) => (
        <div key={index} className="bg-gray-200 h-40 w-40 rounded-md">
          <Image
            alt="random image"
            src={`https://picsum.photos/id/${index}/200/200`}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}
