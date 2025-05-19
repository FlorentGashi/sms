"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Trophy, Target, Heart, Eye } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="w-full flex py-12 items-center md:py-24 justify-center bg-muted">
                <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                        About SchoolMS
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        We're on a mission to transform educational management through innovative technology solutions.
                    </p>
                    </div>
                    <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1743329557386-d761e3134d91?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="SchoolMS Students"
                        className="rounded-lg object-cover border shadow-lg"
                        width={600}
                        height={500}
                    />
                    </div>
                </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="w-full flex py-12 items-center md:py-24 justify-center">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                    <p className="text-muted-foreground">
                    SchoolMS was founded in 2015 by a team of educators and technology experts who recognized the need for
                    a comprehensive, user-friendly school management system. What began as a simple attendance tracking
                    tool has evolved into a complete educational management platform used by thousands of institutions
                    worldwide.
                    </p>
                    <p className="text-muted-foreground">
                    Our journey has been guided by continuous feedback from educators, administrators, and parents,
                    allowing us to develop features that address real-world challenges in educational management.
                    </p>
                    <p className="text-muted-foreground">
                    Today, SchoolMS is trusted by educational institutions of all sizes, from small private schools to
                    large public school districts, helping them streamline administrative tasks and enhance communication
                    between all stakeholders.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Trophy className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">2015</h3>
                            <p className="text-muted-foreground">Founded</p>
                        </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Users className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">50+</h3>
                            <p className="text-muted-foreground">Team Members</p>
                        </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Target className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">5,000+</h3>
                            <p className="text-muted-foreground">Schools Served</p>
                        </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Heart className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">30+</h3>
                            <p className="text-muted-foreground">Countries</p>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Mission & Values Section */}
            <section className="w-full flex py-12 items-center md:py-24 justify-center bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Guided by our commitment to educational excellence
                </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Our Mission</h3>
                        <p className="text-muted-foreground">
                        To provide educational institutions with powerful, user-friendly tools that streamline
                        administrative tasks and enhance communication between schools, students, and parents.
                        </p>
                    </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Eye className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Our Vision</h3>
                        <p className="text-muted-foreground">
                        To be the leading provider of school management solutions, empowering educational institutions
                        worldwide to focus on what matters most: providing quality education.
                        </p>
                    </div>
                    </CardContent>
                </Card>
                <Card className="md:col-span-2 lg:col-span-1">
                    <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Our Values</h3>
                        <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                            <strong>Innovation:</strong> Continuously improving our solutions to meet evolving educational
                            needs.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                            <strong>Reliability:</strong> Providing stable, dependable systems that schools can count on.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                            <strong>Security:</strong> Protecting sensitive educational data with the highest standards.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                            <strong>Support:</strong> Offering exceptional customer service and technical assistance.
                            </span>
                        </li>
                        </ul>
                    </div>
                    </CardContent>
                </Card>
                </div>
            </div>
            </section>

            {/* Team Section */}
            <section className="w-full flex py-12 items-center md:py-24 justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Dedicated professionals committed to transforming educational management
                </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                    name: "Filan Fisteku",
                    role: "CEO & Co-Founder",
                    bio: "Former educator with 15+ years of experience in educational technology.",
                    image: "https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-701751695037005zdurfaim0y.png?height=300&width=300",
                    },
                    {
                    name: "Filan Fisteku 2",
                    role: "CTO & Co-Founder",
                    bio: "Software engineer with a passion for creating intuitive educational tools.",
                    image: "https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-701751695037005zdurfaim0y.png?height=300&width=300",
                    },
                    {
                    name: "Filan Fisteku 3",
                    role: "Head of Product",
                    bio: "Former school administrator focused on developing user-centered solutions.",
                    image: "https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-701751695037005zdurfaim0y.png?height=300&width=300",
                    },
                    {
                    name: "Filan Fisteku 4",
                    role: "Customer Success Director",
                    bio: "Dedicated to ensuring schools get the most out of the SchoolMS platform.",
                    image: "https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-701751695037005zdurfaim0y.png?height=300&width=300",
                    },
                ].map((member, index) => (
                    <Card key={index}>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                        <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="rounded-full h-32 w-32 object-cover border-2 border-primary/10"
                        />
                        <div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                            <p className="text-muted-foreground mt-2">{member.bio}</p>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
                <div className="flex justify-center mt-8">
                <Button variant="outline">View Full Team</Button>
                </div>
            </div>
            </section>

            {/* CTA Section */}
            <section className="w-full flex py-12 items-center md:py-24 justify-center bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
                    <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Partner with SchoolMS to transform your educational institution's management and communication.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#">
                    <Button size="lg" variant="secondary" className="gap-1">
                        Contact Us <ArrowRight className="h-4 w-4" />
                    </Button>
                    </Link>
                    <Link href="#">
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    >
                        Join Our Team
                    </Button>
                    </Link>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}