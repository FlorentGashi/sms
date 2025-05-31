import Link from "next/link"
import {
  Users,
  Calendar,
  FileText,
  Bell,
  CreditCard,
  BarChart,
  MessageSquare,
  BookOpen,
  CheckCircle,
  Clock,
  Shield,
  Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


// Features data
const features = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Student Management",
    description: "Comprehensive student profiles with academic history, attendance records, and performance analytics.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Attendance Tracking",
    description: "Automated attendance system with real-time tracking and reporting capabilities.",
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Grade Management",
    description: "Streamlined grading system with customizable assessment criteria and report generation.",
  },
  {
    icon: <Bell className="h-6 w-6 text-primary" />,
    title: "Notifications",
    description: "Instant alerts for important events, deadlines, and announcements to all stakeholders.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    title: "Fee Management",
    description: "Simplified fee collection with multiple payment options and automated reminders.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Performance Analytics",
    description: "Detailed insights into student and teacher performance with visual reports.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Communication Tools",
    description: "Integrated messaging system for seamless communication between teachers, students, and parents.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Curriculum Management",
    description: "Organize and manage educational content, lesson plans, and learning resources.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Exam Management",
    description: "Schedule exams, manage question banks, and automate result processing.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Timetable Scheduling",
    description: "Create and manage class schedules with conflict detection and optimization.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Role-Based Access",
    description: "Secure access control with customizable permissions for different user roles.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: "Mobile Accessibility",
    description: "Access the system on-the-go with responsive design for all devices.",
  },
]

// FAQ data
const faqItems = [
  {
    question: "How secure is the school management system?",
    answer:
      "Our system employs industry-standard security measures including data encryption, regular security audits, role-based access control, and compliance with data protection regulations to ensure your school's information remains secure.",
  },
  {
    question: "Can the system be customized for our specific needs?",
    answer:
      "Yes, our school management system is highly customizable. You can configure modules, fields, workflows, and reports to match your institution's specific requirements and processes.",
  },
  {
    question: "Is technical support included with the system?",
    answer:
      "Yes, we provide comprehensive technical support through multiple channels including email, phone, and live chat. Our support team is available during business hours to assist with any issues or questions.",
  },
  {
    question: "How easy is it to migrate from our current system?",
    answer:
      "We offer a structured data migration process with dedicated support to ensure a smooth transition from your existing system. Our team will help map your data, perform the migration, and verify the results.",
  },
  {
    question: "Does the system work on mobile devices?",
    answer:
      "Yes, our school management system is fully responsive and works on all devices including smartphones and tablets. We also offer dedicated mobile apps for Android and iOS for an enhanced mobile experience.",
  },
  {
    question: "How often is the system updated?",
    answer:
      "We release regular updates with new features, improvements, and security patches. Major updates are typically released quarterly, while minor updates and security patches are deployed as needed.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Features</h1>
          <p className="text-gray-600 mt-2 text-center max-w-2xl">
            Our comprehensive school management system provides everything you need to run your educational institution
            efficiently.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Features</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="administrative">Administrative</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="overflow-hidden border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academic">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((_, index) => [2, 5, 7, 8, 9].includes(index))
                .map((feature, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{feature.icon}</div>
                      <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="administrative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((_, index) => [0, 1, 4, 10].includes(index))
                .map((feature, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{feature.icon}</div>
                      <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="communication">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((_, index) => [3, 6, 11].includes(index))
                .map((feature, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{feature.icon}</div>
                      <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 flex justify-center lg:py-32 bg-primary rounded-2xl text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your School Management?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of educational institutions worldwide who trust SchoolMS to streamline their
                  administrative processes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#">
                  <Button size="lg" variant="secondary" className="gap-1">
                    View Pricing Plans
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
              <p className="text-sm opacity-80">No credit card required. Start your 14-day free trial today.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
