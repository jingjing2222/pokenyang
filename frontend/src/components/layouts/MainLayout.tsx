import React from 'react';
import Footer from '@/components/layouts/Footer';
import { Outlet } from '@tanstack/react-router';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;