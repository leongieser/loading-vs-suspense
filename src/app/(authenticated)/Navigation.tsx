'use client';
import Link from 'next/link';
import { useActivePath } from '@/utils/helpers';

const navigation: {
  href: string;
  name: string;
}[] = [
  { href: '/posts-loading', name: 'Posts (loading)' },
  { href: '/posts-suspense', name: 'Posts (suspense)' },
];

export function Navigation() {
  const checkActivePath = useActivePath();

  return (
    <nav className="rounded-full px-4 py-2 border border-white">
      <ul className="flex flex-row items-center justify-around gap-2">
        {navigation.map(({ href, name }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                checkActivePath(href)
                  ? 'text-blue-500 px-4 py-2 rounded-full'
                  : 'px-4 py-2'
              }
            >
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
