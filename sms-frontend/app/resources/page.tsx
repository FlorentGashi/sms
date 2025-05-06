import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Download, Search, BookOpen, FileText, Video, Calendar } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Resources & Downloads
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Access guides, tutorials, e-books, and templates to help you get the most out of SchoolMS
              </p>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search resources..."
                    className="w-full appearance-none bg-background pl-8 shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Tabs Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="ebooks">E-Books</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col h-full">
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <BookOpen className="h-5 w-5" />
                            <span className="text-sm font-medium">E-Book</span>
                          </div>
                          <h3 className="text-xl font-bold">Digital Transformation in Education</h3>
                          <p className="text-muted-foreground">
                            Explore how technology is reshaping educational institutions worldwide.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-6">
                        <Button className="w-full gap-1">
                          <Download className="h-4 w-4" /> Download E-Book
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full">
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <FileText className="h-5 w-5" />
                            <span className="text-sm font-medium">Guide</span>
                          </div>
                          <h3 className="text-xl font-bold">Getting Started with SchoolMS</h3>
                          <p className="text-muted-foreground">
                            A comprehensive guide to setting up and configuring your SchoolMS system.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-6">
                        <Button className="w-full gap-1">
                          <Download className="h-4 w-4" /> Download Guide
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full">
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <Video className="h-5 w-5" />
                            <span className="text-sm font-medium">Video</span>
                          </div>
                          <h3 className="text-xl font-bold">SMS Notification System Tutorial</h3>
                          <p className="text-muted-foreground">
                            Learn how to set up and use the SMS notification system effectively.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-6">
                        <Button className="w-full gap-1">Watch Video</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Recently Added</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        title: "Attendance Tracking Best Practices",
                        type: "Guide",
                        icon: FileText,
                        date: "Mar 10, 2025",
                      },
                      {
                        title: "Report Card Templates",
                        type: "Template",
                        icon: Calendar,
                        date: "Mar 5, 2025",
                      },
                      {
                        title: "Effective School Communication",
                        type: "E-Book",
                        icon: BookOpen,
                        date: "Feb 28, 2025",
                      },
                      {
                        title: "Fee Management Tutorial",
                        type: "Video",
                        icon: Video,
                        date: "Feb 20, 2025",
                      },
                    ].map((resource, index) => (
                      <Card key={index} className="flex flex-col h-full">
                        <CardContent className="flex-1 p-6">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2 text-primary">
                              <resource.icon className="h-5 w-5" />
                              <span className="text-sm font-medium">{resource.type}</span>
                            </div>
                            <h3 className="font-bold">{resource.title}</h3>
                            <p className="text-xs text-muted-foreground">Added: {resource.date}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t p-4">
                          <Button variant="outline" size="sm" className="w-full">
                            {resource.type === "Video" ? "Watch" : "Download"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Getting Started with SchoolMS",
                      description: "A comprehensive guide to setting up and configuring your SchoolMS system.",
                      date: "Mar 15, 2025",
                    },
                    {
                      title: "Administrator's Handbook",
                      description: "Learn how to manage users, permissions, and system settings effectively.",
                      date: "Mar 12, 2025",
                    },
                    {
                      title: "Attendance Tracking Best Practices",
                      description: "Optimize your attendance tracking process with these proven strategies.",
                      date: "Mar 10, 2025",
                    },
                    {
                      title: "SMS Notification System Guide",
                      description: "Set up and customize your SMS notification system for maximum effectiveness.",
                      date: "Mar 5, 2025",
                    },
                    {
                      title: "Fee Management Guide",
                      description: "Streamline your fee collection process with SchoolMS.",
                      date: "Feb 28, 2025",
                    },
                    {
                      title: "Exam Management Guide",
                      description: "Create, schedule, and manage exams efficiently with SchoolMS.",
                      date: "Feb 20, 2025",
                    },
                  ].map((guide, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <FileText className="h-5 w-5" />
                            <span className="text-sm font-medium">Guide</span>
                          </div>
                          <h3 className="text-xl font-bold">{guide.title}</h3>
                          <p className="text-muted-foreground">{guide.description}</p>
                          <p className="text-xs text-muted-foreground">Added: {guide.date}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-6">
                        <Button className="w-full gap-1">
                          <Download className="h-4 w-4" /> Download Guide
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ebooks" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Digital Transformation in Education",
                      description: "Explore how technology is reshaping educational institutions worldwide.",
                      date: "Mar 15, 2025",
                    },
                    {
                      title: "Effective School Communication",
                      description: "Best practices for improving communication between schools, students, and parents.",
                      date: "Feb 28, 2025",
                    },
                    {
                      title: "The Future of Educational Technology",
                      description: "Insights into emerging technologies and their impact on education.",
                      date: "Feb 15, 2025",
                    },
                    {
                      title: "Data-Driven Decision Making in Schools",
                      description: "How to use data analytics to improve educational outcomes.",
                      date: "Jan 30, 2025",
                    },
                    {
                      title: "Building a Positive School Culture",
                      description: "Strategies for creating an engaging and supportive educational environment.",
                      date: "Jan 15, 2025",
                    },
                  ].map((ebook, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <BookOpen className="h-5 w-5" />
                            <span className="text-sm font-medium">E-Book</span>
                          </div>
                          <h3 className="text-xl font-bold">{ebook.title}</h3>
                          <p className="text-muted-foreground">{ebook.description}</p>
                          <p className="text-xs text-muted-foreground">Added: {ebook.date}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-6">
                        <Button className="w-full gap-1">
                          <Download className="h-4 w-4" /> Download E-Book
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="templates" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "SMS Notification Templates",
                      description: "Ready-to-use templates for common school notifications and announcements.",
                      date: "Mar 10, 2025",
                    },
                    {
                      title: "Report Card Templates",
                      description:
                        "Customizable report card templates for different grade levels and educational systems.",
                      date: "Mar 5, 2025",
                    },
                    {
                      title: "School Calendar Templates",
                      description: "Organize your academic year with these customizable calendar templates.",
                      date: "Feb 25, 2025",
                    },
                    {
                      title: "Fee Receipt Templates",
                      description: "Professional fee receipt templates for your financial records.",
                      date: "Feb 15, 2025",
                    },
                    {
                      title: "Student ID Card Templates",
                      description: "Design professional student ID cards with these customizable templates.",
                      date: "Feb 5, 2025",
                    },
                    {
                      title: "School Newsletter Templates",
                      description: "Keep your community informed with these newsletter templates.",
                      date: "Jan 25, 2025",
                    },
                  ].map((template, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <Calendar className="h-5 w-5" />
                            <span className="text-sm font-medium">Template</span>
                          </div>
                          <h3 className="text-xl font-bold">{template.title}</h3>
                          <p className="text-muted-foreground">{template.description}</p>
                          <p className="text-xs text-muted-foreground">Added: {template.date}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-6">
                        <Button className="w-full gap-1">
                          <Download className="h-4 w-4" /> Download Templates
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "SMS Notification System Tutorial",
                      description: "Learn how to set up and use the SMS notification system effectively.",
                      duration: "15:24",
                      date: "Mar 15, 2025",
                    },
                    {
                      title: "Fee Management Tutorial",
                      description: "A step-by-step guide to managing student fees in SchoolMS.",
                      duration: "12:08",
                      date: "Feb 20, 2025",
                    },
                    {
                      title: "Attendance Tracking Tutorial",
                      description: "Learn how to track and manage student attendance efficiently.",
                      duration: "10:45",
                      date: "Feb 10, 2025",
                    },
                    {
                      title: "Report Generation Tutorial",
                      description: "Create custom reports for various school metrics and performance indicators.",
                      duration: "18:32",
                      date: "Jan 30, 2025",
                    },
                    {
                      title: "User Management Tutorial",
                      description: "Learn how to add, edit, and manage user accounts in SchoolMS.",
                      duration: "14:15",
                      date: "Jan 20, 2025",
                    },
                    {
                      title: "Mobile App Tutorial",
                      description: "Get the most out of the SchoolMS mobile app with this comprehensive tutorial.",
                      duration: "20:05",
                      date: "Jan 10, 2025",
                    },
                  ].map((video, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2 text-primary">
                            <Video className="h-5 w-5" />
                            <span className="text-sm font-medium">Video</span>
                          </div>
                          <h3 className="text-xl font-bold">{video.title}</h3>
                          <p className="text-muted-foreground">{video.description}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground">Duration: {video.duration}</p>
                            <p className="text-xs text-muted-foreground">Added: {video.date}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-6">
                        <Button className="w-full">Watch Video</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Subscribe to our newsletter to receive updates on new resources and features
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 SchoolMS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
