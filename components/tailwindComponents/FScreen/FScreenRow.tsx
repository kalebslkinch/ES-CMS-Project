export default function FScreenRow({ children, className = '', bg = '' }) {
  return (
    <div
      style={{ backgroundImage: `url('${bg}')` }}
      className={`max-w-screen flex w-full flex-row ${className}`}
    >
      {children}
    </div>
  );
}
