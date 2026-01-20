import { footerLinks } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call +212 766087705.
        </p>
        <Image src="/logo.svg" alt="Apple logo" width={120} height={40} />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
