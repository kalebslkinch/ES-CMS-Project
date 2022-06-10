import FlexCol from '../tailwindComponents/Flex/FlexCol';
import FlexRow from '../tailwindComponents/Flex/FlexRow';
import AuthRoute from '../../HOC/authRoute';
const Layout = ({ children, className = '' }) => {
  return (
    <AuthRoute>
      <FlexRow className=' ml-auto h-[88] w-10/12'>
        <FlexCol className={`w-full text-white ${className}`}>
          {children}
        </FlexCol>
      </FlexRow>
    </AuthRoute>
  );
};

export default Layout;
