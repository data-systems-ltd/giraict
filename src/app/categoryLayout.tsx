import React, { ReactNode } from 'react';
import { Header } from './header';
import { SideBar } from './sideBar';

interface CategoryLayoutProps {
    children: ReactNode;
}

export const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
    return (
        <div className="">
            <Header />
        
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