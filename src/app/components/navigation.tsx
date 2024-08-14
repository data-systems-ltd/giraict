import Link from "next/link"

export default function Navigation(){
    return <ul className="space-y-2 p-12">
    <li><Link href="/aircondition">Air Condition</Link></li>
    <li><Link href="/aircondition">Audio &  Video</Link></li>
    <li><Link href="/gadgets">Gadgets</Link></li>
    <li><Link href="/homeAppliances">Home Appliances</Link></li>
    <li><Link href="/phone">Kitchen Appliances</Link></li>
    <li><Link href="/computer">PCs & Laptop</Link></li>
    <li><Link href="/refregirator">Refrigerator</Link></li>
    <li><Link href="/phone">Smart Home</Link></li>

    
</ul>
}