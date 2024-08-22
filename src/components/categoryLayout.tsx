import React, { ReactNode } from 'react';
import { Header } from '../app/header';
import { SideBar } from '../app/sideBar';
import Landing from '@/components/Landing';

interface CategoryLayoutProps {
    children: ReactNode;
}

export const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
    return (
        <div className="">
            <Landing />
        
        <div className="flex bg-white">
            <SideBar />
            <div className="flex-1 flex flex-cols">
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
        </div>
    );
};