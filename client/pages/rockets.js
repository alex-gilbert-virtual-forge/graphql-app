import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      rocket_id
      rocket_name
      rocket_type
    }
  }
`;

const Rockets = () => {
  const { loading, error, data } = useQuery(ROCKETS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rockets.map(({ rocket_id, rocket_name, rocket_type }) => (
    <div key={rocket_id}>
      <p>
        {rocket_name}: {rocket_type}
      </p>
    </div>
  ));
};

export default Rockets;
