import Image from "next/image";
import { TimelineItemData } from "./Timeline.types";

interface Props {
    item?: TimelineItemData;
}
export default function TimelineItem({ item }: Props) {
    if (!item) return null;
    return (
        <div className="relative pl-8 pb-3 last:pb-0">
            <div
                className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-[var(--color-timeline-dot)] z-10 " />
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-12 items-start">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-[var(--color-text-muted)] text-xs font-medium leading-none">
                        <span>{item.period}</span>
                        {item.location && (
                            <span className="flex items-center gap-1">
                                <Image
                                    src="/assets/location.png"
                                    alt="Location"
                                    width={13}
                                    height={13}
                                    className="opacity-70"
                                />
                                {item.location}
                            </span>
                        )}
                    </div>
                    <div className="flex items-start gap-4">
                        {item.logo && (
                            <div className="shrink-0">
                                <Image
                                    src={item.logo}
                                    alt={item.subtitle}
                                    width={52}
                                    height={52}
                                    className="rounded-xl"
                                />
                            </div>
                        )}
                        <div className="flex flex-col justify-center">
                            <p className="text-[var(--color-text-muted)] text-[14px]">
                                {item.title}
                            </p>
                            <h3 className="text-l font-medium text-[var(--color-text-main)] leading-tight">
                                {item.subtitle}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="md:pt-0 pt-2">
                    {item.description && (
                        <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                            {item.description}
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}