import { useState, useEffect } from 'react';
import { loadUserData } from '../services/loadUserData';
import { User } from '../types';

export const useUserData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUserData({ setUser, setError, setLoading });
  }, []);

  return { user, isLoading, error, setUser };
};
