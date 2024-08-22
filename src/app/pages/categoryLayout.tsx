import React, { ReactNode } from 'react';
import { Header } from '../header';
import { SideBar } from '../sideBar';
import Landing from '@/components/Landing';

interface CategoryLayoutProps {
    children: ReactNode;
}

export const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header at the top */}
            <Landing />

            {/* Sidebar and main content stacked vertically */}
            <div className="flex flex-col md:flex-row bg-white">
                
                {/* Sidebar */}
                <div className="w-full md:w-60 flex justify-center md:justify-start">
                    <SideBar />
                </div>

                {/* Main content area */}
                <div className="flex-1 p-4">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};
