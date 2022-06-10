import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { time } from './layout/NavBar';
import { ADD_TRACK_DEPLOY } from '../../graphql/company/mutation/addDeployTrack';
import { clientCompany } from '../../lib/apolloClient';
import { date } from '../../lib/dateandtime';
import { AuthContext } from '../../context/AuthContext';

const Deploy = ({ setTriggerDeployTime }) => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  const [addTrackDeploy, { data }] = useMutation(ADD_TRACK_DEPLOY, {
    client: clientCompany,
  });
  useEffect(() => {
    addTrackDeploy({
      variables: {
        data: {
          userID: currentUser.uid,
          name: currentUser.displayName,
          entryTime: time,
          entryDate: date,
          entryNumber: 1,
        },
      },
    });
    // Vercel Deploy API
    window.fetch(process.env.VERCEL_DEPLOY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setTriggerDeployTime(true);
    // Route to Company Homepage
    setTimeout(() => router.replace('/company'), 2000);
  }, []);

  return <h1 className='mx-auto text-4xl font-medium'>Deploying</h1>;
};

export default Deploy;
