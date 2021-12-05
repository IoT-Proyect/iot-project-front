import { LocationMarkerIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { Layout } from '../../components/Layout';
import { LineChart } from '../../components/LineChart';
import { Card } from '../../components/Card';
import { GET_POOL } from '@/lib/queries';
import { useRouter } from 'next/dist/client/router';

export default function Pool() {
  const router = useRouter();
  const { loading, data } = useQuery(GET_POOL(router.query.slug), {
    fetchPolicy: 'network-only',
  });

  if (loading)
    return (
      <Layout>
        <h1>Loading</h1>
      </Layout>
    );

  return (
    <div>
      <Layout>
        {data?.pool ? (
          <>
            <Card pool={data.pool} />
            <LineChart sensorDataHistory={data.pool.sensorDataHistory} />
          </>
        ) : (
          <h1>Pool not found</h1>
        )}
      </Layout>
    </div>
  );
}
