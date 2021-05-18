import Link from "next/link";

import CartSummary from "./CartSummary";

function Header() {
  return (
    <header className="md:absolute md:left-0 md:top-0 w-full z-10">
      <div className="py-3 lg:py-5 flex items-center">
        <Link href="/">
          <a title="Return to ChopChop">Butikk</a>
        </Link>
        <span className="pr-1">,</span>
        <CartSummary />
      </div>
    </header>
  );
}

export default Header;