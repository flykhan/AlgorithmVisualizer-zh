import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Home, Info } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-background shadow-sm px-4 h-11 flex justify-between items-center shrink-0">
      <Link href="/" className="text-base md:text-xl font-bold leading-none">算法可视化</Link>
      <div className="flex items-center gap-1 md:space-x-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <Home className="h-4 w-4" />
            首页
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/about">
            <Info className="h-4 w-4" />
            关于
          </Link>
        </Button>
        <Button size="icon" variant="ghost" asChild className="h-8 w-8">
          <Link href="https://github.com/flykhan/AlgorithmVisualizer-zh" target="_blank">
            <Github className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </nav>
  )
}

