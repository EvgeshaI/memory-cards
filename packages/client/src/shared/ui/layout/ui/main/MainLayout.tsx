import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import cls from './MainLayout.module.scss';

interface Props {
  sidebarSlot: ReactNode;
}

export const MainLayout: FC<Props> = (props) => {
  const { sidebarSlot } = props;

  return (
    <div className={cls.container}>
      {sidebarSlot}

      <main>
        <Outlet />
      </main>
    </div>
  );
};
