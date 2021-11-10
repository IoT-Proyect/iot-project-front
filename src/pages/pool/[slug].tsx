import { GetServerSideProps } from 'next';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { apolloClient } from '../../../apolloClient';
import { gql } from '@apollo/client';
import { Layout } from '../../components/Layout';
import { LineChart } from '../../components/LineChart';
import { Card } from '../../components/Card';

export default function Pool({ pool }) {
  console.log(pool);
  return (
    <div>
      <Layout>
        <Card pool={pool} />
        <LineChart sensorDataHistory={pool.sensorDataHistory} />
      </Layout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        pool(id: "${ctx.params.slug}") {
          _id
          name
          description
          location
          specs{
            width
            length
            depth
            capacity
          }
          sensorDataHistory {
            date
            ph
          }
        }
      }
    `,
  });

  if (!data) return { notFound: true };
  console.log(data.pool);
  return {
    props: {
      pool: data.pool,
    },
  };
};
