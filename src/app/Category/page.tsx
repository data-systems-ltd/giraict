import React, { ReactNode } from 'react';
import { SideBar } from '@/components/sideBar'
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';


interface CategoryLayoutProps {
    children: ReactNode;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header  */}
            <Landing />

            {/* Sidebar and main content stacked vertically */}
            <div className="flex flex-col md:flex-row bg-white border-b border-gray-300">
                
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
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CategoryLayout
