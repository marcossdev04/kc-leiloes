import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from '@/assets/footerImage.png'

const BlogHeader = () => {
  return (
    <header className="w-full flex justify-center border-b bg-black">
      <div className="container max-w-7xl flex h-20 items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-primary">
          <Image src={logo} width={100} alt="logo" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Button>Fale Conosco</Button>
        </nav>

        <Button variant="ghost" className="md:hidden" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}

export default BlogHeader
