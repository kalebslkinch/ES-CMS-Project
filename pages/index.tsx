import FScreenCol from '../components/tailwindComponents/FScreen/FScreenCol';
import FScreenRow from '../components/tailwindComponents/FScreen/FScreenRow';
import checkUser from '../lib/checkUser';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import HomeContent from '../components/home/HomeContent';
import { AuthContext } from '../context/AuthContext';
const Index = ({ setCurrentUrl }) => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      router.replace('/company');
    } else {
      router.replace('/login');
    }
    setCurrentUrl(window.location.href);
  }, []);

  return <>{currentUser ? null : <HomeContent />}</>;
};
export default Index;
