import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Center } from '@mantine/core/lib';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './ErrorPage.module.scss';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <Center className={cls.errorPageContainer}>
          <h1>Что-то пошло не так.</h1>
          <NavLink to={routePaths[RouteNames.START_GAME]}>на главную</NavLink>
        </Center>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
