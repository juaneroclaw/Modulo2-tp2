import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MonitorPlay, BookOpen, Users, BadgeCheck } from 'lucide-react'
export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-between min-h-screen">
      <div className="container py-5 sm:py-5 md:py-5">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center mx-auto max-w-[90%]">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Comienza o acelera tu carrera en tecnología
              </h1>
              <p className="text-2xl sm:text-2xl text-black font-bold">
                Estudia Desarrollo Full Stack, Data Science o Data Analytics.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <MonitorPlay className="h-5 w-5 text-purple-600" />
                <span>Online, en vivo y flexible</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span>Basado en proyectos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>Basado en cohortes</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-purple-600" />
                <span>Garantía de Empleo</span>
              </div>
            </div>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
              Aplicar
            </Button>
          </div>
          <div className="relative mt-8 sm:mt-0">
            <Image
              src="/placeholder.webp"
              alt="Student working at desk"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
        </div>
      </div>
      <footer className="w-full bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-2xl font-semibold">
            Bootcamp <span className="text-purple-600">#1</span> de Latam
          </p>
        </div>
      </footer>
    </section>
  )}
