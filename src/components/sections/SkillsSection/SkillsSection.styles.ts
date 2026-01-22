export const styles = {
    container: "relative w-full ", 
  lineDotCustom: "absolute -left-12 -translate-x-1/2 top-0 ",
    title: "text-3xl font-bold mb-5 text-[var(--color-text-main)]",
    mainGrid: "grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start",
    categoryHeader: "flex items-center gap-3 font-bold  text-l mb-5 text-[var(--color-text-main)]",

    iconPurple: "w-8 h-8 rounded-full flex items-center justify-center bg-[#EFE2F9] dark:bg-[#5531A7]",
    iconBlue: "w-8 h-8 rounded-full flex items-center justify-center text-white bg-[var(--color-icon-bg)]",

    stack: "flex flex-col gap-4",
    flexWrapper: "flex flex-wrap gap-4 items-stretch",

    cardBase: " flex items-center justify-center text-center font-medium text-l px-8 py-6 min-h-[100px] bg-[var(--color-bg-card)] text-[var(--color-blue)]",

    groupContainer: "flex overflow-hidden bg-[var(--color-bg-card)] min-h-[100px] h-full",
    groupItem: "flex-1 flex items-center justify-center px-4 py-6 text-center font-medium text-l text-[var(--color-blue)] border-r border-[var(--color-border)] dark:border-white/10 last:border-r-0",
    listCard: "px-8 py-6  bg-[var(--color-bg-card)] flex flex-col justify-center items-start  min-h-[100px] ",
    listItem: "text-l font-medium text-[var(--color-blue)] flex items-center gap-3 before:content-['•'] before:text-[#516CF7] before:text-xs"
}; 
