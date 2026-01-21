export const profileStyles = {
    container: `
    w-full max-w-[320px] p-8 rounded-3xl flex flex-col gap-8 transition-all duration-300
    bg-[var(--color-bg-card)] text-[var(--color-text-main)] border border-[var(--color-border)] 
  `,
    header: {
        wrapper: "text-center",
        avatarWrapper: "relative w-[120px] h-[120px] mx-auto mb-6",
        avatar: `
      rounded-full object-cover border-4 border-[var(--color-border)]
    `,
        name: "text-3xl font-bold ",
        role: `
      text-lg font-medium mt-1 text-[var(--color-text-muted)]
    `,
    },
    quote: {
        wrapper: "text-center italic relative py-4",
        symbol: "absolute text-2xl opacity-20",
        text: "text-sm px-4 text-[var(--color-text-muted)]",
        author: "text-xs mt-2 opacity-60",
    },
    divider: "border-t border-[var(--color-border)]",
    sectionLabel: "text-xs font-bold text-gray-500 uppercase ",
    contact: {
        item: "flex items-center gap-4",
        iconBox: `
      flex items-center justify-center transition-colors bg-[var(--color-border)]
    `,
        label: "text-[10px] uppercase  text-gray-500 font-bold",
        value: "text-sm font-medium truncate max-w-[180px]",
    },
    socials: {
        item: "flex items-center gap-4 group cursor-pointer",
        label: "text-[10px] text-gray-500 uppercase",
        value: "text-sm transition-colors group-hover:text-indigo-600",
    },
    languages: {
        item: "flex items-center gap-4",
        flagWrapper: "relative w-7 h-5 overflow-hidden rounded-sm ",
        name: "text-sm font-semibold",
        level: "text-xs text-gray-500",
    },
};
