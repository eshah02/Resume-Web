import { cn } from "@/libs/cn";

export const LineDot = ({ className }: { className?: string }) => {
  return (
    <div 
      className={cn(
        "hidden lg:flex w-10 h-10 rounded-full bg-white dark:bg-[#1e1e2d] items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.08)] z-20 pointer-events-none",
        className
      )}
    >
      <div className="w-3.5 h-3.5 rounded-full bg-[#5531A7] dark:bg-[#C696FC]"></div>
    </div>
  );
};