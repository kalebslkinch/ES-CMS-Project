export default function NavRow({ children, className = '' }) {
  return <nav className={`flex flex-row  ${className}`}>{children}</nav>;
}
