export default function Width({ children, w }) {
  return <div className={`w-${w}`}>{children}</div>;
}
