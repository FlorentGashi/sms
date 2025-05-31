import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function FeaturesLoading() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center justify-center mb-12">
        <Skeleton className="h-8 w-[150px] mb-2" />
        <Skeleton className="h-5 w-[400px]" />
      </div>

      <div className="mb-8 flex justify-center">
        <Skeleton className="h-10 w-[400px] rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-6 mb-2" />
                <Skeleton className="h-6 w-[150px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-[80%]" />
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="mb-12">
        <Skeleton className="h-8 w-[300px] mx-auto mb-8" />
        <div className="max-w-3xl mx-auto space-y-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-md p-4">
                <Skeleton className="h-6 w-[80%] mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-[90%] mb-1" />
                <Skeleton className="h-4 w-[70%]" />
              </div>
            ))}
        </div>
      </div>

      <Skeleton className="h-[200px] w-full rounded-lg" />
    </div>
  )
}
