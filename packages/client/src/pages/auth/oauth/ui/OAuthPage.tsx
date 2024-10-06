import { Navigate } from 'react-router-dom';
import { Box, LoadingOverlay } from '@mantine/core';
import { useSignInByYandex } from '@/features/auth';
import { RouteNames, routePaths } from '@/shared/constants/router';

export const OAuthPage = () => {
  const { isLoading, isInitialized } = useSignInByYandex();

  if (!isInitialized || isLoading) {
    return (
      <Box pos="relative" w="100%" h="100vh">
        <LoadingOverlay visible />
      </Box>
    );
  }

  return <Navigate to={routePaths[RouteNames.START_GAME]} replace />;
};
