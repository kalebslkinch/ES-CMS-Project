export default function WidthCl({ children, w, className }) {
  return <div className={`w-${w} ${className}`}>{children}</div>;
}
