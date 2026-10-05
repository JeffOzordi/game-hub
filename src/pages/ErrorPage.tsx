import NavBar from '@/components/NavBar';
import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpexted error occurred. '}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
