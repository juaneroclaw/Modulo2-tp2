'use client'
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const SiteHeaderComponent = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          HENRY
        </Link>
        <NavigationMenu className="relative">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Para estudiantes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <NavigationMenuLink asChild>
                    <Link href="#" className="block py-2 hover:text-accent-foreground">
                      Programas
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Para empresas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <NavigationMenuLink asChild>
                    <Link href="#" className="block py-2 hover:text-accent-foreground">
                      Soluciones
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-4">
          <Button variant="ghost">Ingresar</Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Aplicar</Button>
        </div>
      </div>
    </header>
  )
}

export const SiteHeader = dynamic(() => Promise.resolve(SiteHeaderComponent), {
  ssr: false
})
