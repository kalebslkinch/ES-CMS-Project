import { useEffect } from 'react';
import Deploy from '../../../components/company/Deploy';
import Layout from '../../../components/Layout/Layout';

const DeployToVercel = ({ setCurrentUrl, setTriggerDeployTime }) => {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // const { loading, error, data: trackDeployData } = useQuery(ALL_TRACK_DEPLOY, {
  //   // variables: { userID: user.id },
  //   client: clientCompany
  // });

  // if (error) {
  //   alert(error.message);
  //   return (
  //     <Layout >
  //       <Link href="/company">Return Home</Link>
  //     </Layout>
  //   );
  // }
  // if (loading) return <Loading />;

  // const allData = trackDeployData.allTrackDeploy.data;
  // console.log(allData);

  return (
    <Layout>
      <Deploy setTriggerDeployTime={setTriggerDeployTime} />
    </Layout>
  );
};

export default DeployToVercel;
