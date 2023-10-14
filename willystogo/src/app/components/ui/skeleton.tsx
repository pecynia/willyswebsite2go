import { cn } from "@/app/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-prinary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
