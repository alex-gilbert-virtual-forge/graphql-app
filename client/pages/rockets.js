import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Grid, GridItem, Title, Text } from '../componets/layout/layout.styles';

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
  if (loading) return <p>Loading...</p>;

  return (
    <Fragment>
      <Title>Rockets</Title>
      <Grid>
        {data.rockets.map(({ rocket_id, rocket_name, rocket_type }) => (
          <GridItem key={rocket_id}>
            <Text>
              {rocket_name} : {rocket_type}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Rockets;
