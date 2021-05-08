import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import decode from 'jwt-decode';

export default function Metrics() {
  
  return (
    <>
      <h1>Metrics: </h1>      
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get("/me");

  const user = decode

  return {
    props: {},
  };
}, {
  permissions: ['metrics.list'],
  roles: ['administrator'],
});
