import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MonitorPlay, BookOpen, Users, BadgeCheck } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="container py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Comienza o acelera tu carrera en tecnología
            </h1>
            <p className="text-xl text-muted-foreground">
              Estudia Desarrollo Full Stack, Data Science o Data Analytics.
            </p>
          </div>
          <div className="space-y-4">
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
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-6 text-lg">
            Aplicar
          </Button>
        </div>
        <div className="relative">
        <Image
          src="/landing-reference.png"
          alt="Student working at desk"
          width={600}
          height={600}
          className="rounded-lg object-cover"
          priority
        />
        </div>
      </div>
      <div className="mt-24 text-center">
        <p className="text-2xl font-semibold">
          Bootcamp <span className="text-purple-600">#1</span> de Latam
        </p>
      </div>
    </section>
  )
}

