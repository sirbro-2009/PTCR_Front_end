import { Bell } from 'lucide-react';
import { RefreshCcwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyMuted() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bell />
        </EmptyMedia>
        <EmptyTitle>No alarm was set</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          Whene you add new alarm, new notifications will appear here
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
