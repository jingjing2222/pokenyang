import React from 'react';
import Footer from '@/components/layouts/Footer';
import { Outlet, useLocation } from '@tanstack/react-router';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isRootRoute = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4">
        {children || <Outlet />}
      </main>
      {!isRootRoute && <Footer />}
    </div>
  );
};

export default MainLayout;