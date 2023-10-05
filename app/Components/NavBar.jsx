import Link from 'next/link';
function NavBar() {
  return (
    <nav>
      <ul className="flex space-x-20 p-4 bg-blue-300">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/main">Main</Link>
        </li>
        <li>
          <Link href="/main/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
