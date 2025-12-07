import Image from "next/image"
import { navLinks } from "@/constants"



const Navbar = () => {
  return (
    <header>
        <nav>
            <Image src="/logo.svg" alt="Apple Logo" width={32} height={32} />
            <ul>
                {
                    navLinks.map((link , index) => {
                        return (
                            <li key={index}>{link.label}</li>
                        )
                    })
                }
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <Image src="/search.svg" alt="Search" width={32} height={32} />
                </button>
                <button>
                    <Image src="/cart.svg" alt="Cart" width={32} height={32} />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar