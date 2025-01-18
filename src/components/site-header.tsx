'use client'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
const SiteHeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center mx-auto max-w-[90%] px-4">
      <Link href="/" className="pl-0 sm:pl-[1%] h-12">
        <Image 
          src="/logo.jpeg" 
          alt="Henry Logo" 
          width={100} 
          height={35} 
          className="object-contain h-full"
        />
      </Link>
        
        {/* Menú hamburguesa para móvil */}
        <Button 
          variant="ghost" 
          className="sm:hidden ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </Button>

        {/* Menú móvil */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b sm:hidden">
            <div className="p-6 space-y-4">
              <Link 
                href="#" 
                className="block py-2 hover:bg-yellow-400 rounded-md px-6 transition-all duration-200 hover:text-black hover:font-medium hover:shadow-md"
              >
                Para estudiantes
              </Link>
              <Link 
                href="#" 
                className="block py-2 hover:bg-yellow-400 rounded-md px-6 transition-all duration-200 hover:text-black hover:font-medium hover:shadow-md"
              >
                Para empresas
              </Link>
            </div>
          </div>
        )}

        {/* Menú desktop */}
        <NavigationMenu className="hidden sm:flex ml-[1%]">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Para estudiantes</NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Para empresas</NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2 sm:gap-4 ml-auto">
          <Button variant="ghost" className="text-sm sm:text-base">Ingresar</Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-sm sm:text-base">Aplicar</Button>
        </div>
      </div>
    </header>
  )
}

export const SiteHeader = dynamic(() => Promise.resolve(SiteHeaderComponent), {
  ssr: false
})
