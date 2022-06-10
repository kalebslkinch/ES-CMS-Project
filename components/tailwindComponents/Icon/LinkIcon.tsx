import { useRouter } from 'next/router';

export default function LinkIcon({ children, className, link }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.replace(link)}
      className={`focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}
