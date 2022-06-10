export default function FScreen({ children, className = '' }) {
  return <div className={`max-w-screen w-full ${className}`}>{children}</div>;
}
