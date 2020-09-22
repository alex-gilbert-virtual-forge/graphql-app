import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Grid, GridItem, Text } from '../componets/layout';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid>
      {data.launches.map(({ flight_number, mission_name }) => (
        <GridItem key={flight_number}>
          <Text>
            {flight_number} : {mission_name}
          </Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Launches;
