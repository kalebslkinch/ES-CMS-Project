export default function FlexCol({ children, className = '' }) {
  return <div className={`flex flex-col  ${className}`}>{children}</div>;
}
