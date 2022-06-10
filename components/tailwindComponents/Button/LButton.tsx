import { useRouter } from 'next/router';

export default function LButton({ children, className, link }) {
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
