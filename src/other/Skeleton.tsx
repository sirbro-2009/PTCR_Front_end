import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonBar() {
  return (
    <div className="flex items-center group-data-[collapsible=icon]:hidden gap-4 " dir="ltr">
      <Skeleton className="h-12 w-12 rounded-full  bg-emerald-600" />
      <div className="space-y-2 " >
        <Skeleton className="h-4 w-[150px] bg-emerald-600" />
        <Skeleton className="h-4 m-auto w-[100px] bg-emerald-600" />
      </div>
    </div>
  )
}
