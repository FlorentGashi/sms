"use client"

import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
import {
  School,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Users,
  BookOpen,
  Calendar,
  Bell,
  BarChart,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-2">
            <School className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SMS</span>
          </div>

          {/* Mobile menu button */}
          <button className="block md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link href="#">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="#">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-4 space-y-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex flex-col space-y-2">
                <Link href="#">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="#">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full flex py-12 items-center md:py-24 justify-center lg:py-32 bg-muted">
          <div className="container px-6 md:px-8 xl:px-14">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
                {/* <Badge className="mb-2">Example New Version or smth...</Badge> */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Streamline Your School Management
                </h1>
                <p className="max-w-[600px] text-sm sm:text-base md:text-xl text-muted-foreground">
                  Our comprehensive School Management System helps you manage students, teachers, courses, and
                  communicate effectively with SMS notifications.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="#">
                    <Button size="lg" className="gap-1 w-full min-[400px]:w-auto">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 h-72 w-72 bg-primary/10 rounded-full blur-3xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=550&width=750"
                    alt="School Management Dashboard"
                    className="relative rounded-lg shadow-xl object-cover border w-full"
                    width={650}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors/Partners Section */}
        <section className="w-full flex py-12 items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Trusted by leading educational institutions</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 grayscale opacity-90">
                <div className="flex items-center justify-center">
                  <img src="https://www.kekamed.com/eduford_img/kekafinal.png" alt="Sponsor 1" className="h-8 md:h-10" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="https://www.kekamed.com/eduford_img/euroschool-removebg-preview.png" alt="Sponsor 2" className="h-8 md:h-10" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="https://www.kekamed.com/eduford_img/Ubtlogo.png" alt="Sponsor 3" className="h-8 md:h-10" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="https://www.kekamed.com/eduford_img/euroschool-removebg-preview.png" alt="Sponsor 4" className="h-8 md:h-10" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="https://www.kekamed.com/eduford_img/kekafinal.png" alt="Sponsor 5" className="h-8 md:h-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full flex py-12 items-center md:py-24 justify-center">
          <div className="container px-6 md:px-8 xl:px-14">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your educational institution efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Student Management</h3>
                    <p className="text-muted-foreground">
                      Manage student profiles, attendance, grades, and performance tracking.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Course Management</h3>
                    <p className="text-muted-foreground">
                      Create and manage courses, assign teachers, and track curriculum progress.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Attendance Tracking</h3>
                    <p className="text-muted-foreground">
                      Track student and teacher attendance with detailed reports and analytics.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">SMS Notifications</h3>
                    <p className="text-muted-foreground">
                      Send automated SMS alerts for attendance, events, and important announcements.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Performance Analytics</h3>
                    <p className="text-muted-foreground">
                      Generate detailed reports on student performance, attendance, and other metrics.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <School className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Fee Management</h3>
                    <p className="text-muted-foreground">
                      Manage student fees, generate invoices, and track payment history.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/features">
                <Button variant="outline" className="gap-1">
                  View All Features <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full flex py-12 items-center md:py-24 justify-center lg:py-32">
          <div className="container px-6 md:px-8 xl:px-14">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                  <p className="mt-4 text-muted-foreground md:text-xl">
                    Have questions or need assistance? Our team is here to help.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>info@schoolms.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <p>123 Education Street, Learning City, ED 12345</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Enter subject" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Enter your message" rows={4} />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0 justify-center flex">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 SMS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}