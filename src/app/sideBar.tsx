
import React from 'react';
import Link from 'next/link'


export const SideBar = () =>{
 
    return (
      <aside className="sidebar w-60 h-full bg-gray-800 text-white"> 
      <div className="p-10">
        <h1>Category</h1>
      </div>
        <ul className="space-y-2 p-12">
                <li><Link href="/aircondition">Air Conditioner</Link></li>
                <li><Link href="/category/airCondition">Audio & Video</Link></li>
                <li><Link href="/category/gadgets">Gadgets</Link></li>
                <li><Link href="/category/homeAppliances">Home Appliances</Link></li>
                <li><Link href="/category/phone">Kitchen Appliances</Link></li>
                <li><Link href="/computer">PCs & Laptop</Link></li>
                <li><Link href="/refregirator">Refrigerator</Link></li>
                <li><Link href="/phone">Smart Home</Link></li>

                
            </ul>
            <div className='p-10'><h1>Filter by Price</h1></div>
            <div className="p-10"><h1>Average Rating</h1></div>
      </aside>
    )
  }