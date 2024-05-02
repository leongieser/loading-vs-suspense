'use client';

export default function NewPostBtn() {
  const handleClick = () => {
    alert('New Post');
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="text-md font-semibold rounded-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-400 active:bg-blue-800"
      >
        New Post
      </button>
    </div>
  );
}
