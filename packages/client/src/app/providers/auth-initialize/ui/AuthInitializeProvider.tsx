import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, LoadingOverlay } from '@mantine/core';
import { loadUserData, selectIsInitialized } from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';

export const AuthInitializeProvider = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsInitialized);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(loadUserData()).catch(() => Promise.resolve());
    }
  }, [isInitialized]);

  if (!isInitialized) {
    return (
      <Box pos="relative" w="100%" h="100vh">
        <LoadingOverlay visible />
      </Box>
    );
  }

  return <Outlet />;
};
