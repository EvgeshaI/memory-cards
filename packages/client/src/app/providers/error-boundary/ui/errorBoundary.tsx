import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './ErrorBoundary.module.scss';

interface ErrorBoundaryState {
  hasError: boolean;
}
export class ErrorBoundary extends Component<
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
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={cls.errorBoundaryContainer}>
          <h1>Что-то пошло не так.</h1>
          <NavLink to={routePaths[RouteNames.START_GAME]}>на главную</NavLink>
        </div>
      );
    }
    return children;
  }
}
