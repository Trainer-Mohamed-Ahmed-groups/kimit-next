import Link from "next/link";
import Template from "./template";

export const metadata = {
    title: 'Kimit products',
    description: 'Generated by create next app',
}
const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/products/singleProduct">Single</Link>
                    </li>
                </ul>
            </nav>
            {children}
            <Template >This is a template</Template>
        </div>
    );
}

export default Layout;