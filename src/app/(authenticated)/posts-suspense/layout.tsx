export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col items-center gap-5">{children}</div>;
}
