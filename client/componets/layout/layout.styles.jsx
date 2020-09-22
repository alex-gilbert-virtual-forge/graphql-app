import styled from 'styled-components';

const grey = '#979797';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const GridItem = styled.div`
  border: 1px solid ${grey};
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  position: relative;
`;

export const Title = styled.div`
  color: ${grey};
  font-size: 36px;
  text-align: center;
  margin: 1rem;
`;

export const Text = styled.div`
  color: ${grey};
`;
