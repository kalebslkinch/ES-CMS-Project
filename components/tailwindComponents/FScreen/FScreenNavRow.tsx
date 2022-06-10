export default function FScreenNavRow({ children, className = '' }) {
  return (
    <nav className={`max-w-screen flex w-full flex-row  ${className}`}>
      {children}
    </nav>
  );
}
