import {
  FC,
  PropsWithChildren,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import { Box, LoadingOverlay } from '@mantine/core';
import { loadUserData } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/store';

export const AuthInitializeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(loadUserData())
        .catch(() => Promise.resolve())
        .finally(() => {
          setIsInitialized(true);
        });
    }
  }, [dispatch, isInitialized]);

  if (!isInitialized) {
    return (
      <Box pos="relative" w="100%" h="100vh">
        <LoadingOverlay visible />
      </Box>
    );
  }

  if (children && isValidElement(children)) {
    return children;
  }

  return null;
};
