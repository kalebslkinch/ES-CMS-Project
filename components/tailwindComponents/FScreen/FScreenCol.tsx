export default function FScreenCol({ children, className = '', bg = '' }) {
  return (
    <div
      style={{ backgroundImage: `url('${bg}')` }}
      className={`max-w-screen flex w-full flex-col ${className}`}
    >
      {children}
    </div>
  );
}
