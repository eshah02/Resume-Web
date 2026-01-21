import { TimelineProps } from "./Timeline.types";
import TimelineItem from "./TimelineItem";

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-3">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)]" />

      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
}
