import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const Nav = () => {
  return (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          alt="Auto Paint Pro Logo"
          src="/images/logo.png"
          width={150}
          height={40}
          className="rounded-sm"
        />
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#services" className="text-sm font-medium hover:text-primary">
          O Nas
        </a>
        <a href="#gallery" className="text-sm font-medium hover:text-primary">
          Produkty
        </a>
        <a href="#about" className="text-sm font-medium hover:text-primary">
          Baza Wiedzy
        </a>
        <a href="#contact" className="text-sm font-medium hover:text-primary">
          Partnerzy
        </a>
        <Button size="sm">Skontaktuj Się</Button>
      </nav>
      <Button size="icon" variant="ghost" className="md:hidden">
        <Menu className="h-5 w-5" />
      </Button>
    </div>
    </header>
    )};
export default Nav