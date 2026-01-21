export const styles = {
  container: `
    min-h-screen transition-colors duration-300
    bg-[var(--color-bg-main)] text-[var(--color-text-main)]
  `,
  grid: "max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 p-8 md:p-16",
  content: "relative pl-0 lg:pl-12",
  verticalLine: `
    hidden lg:block absolute left-0 top-0 bottom-0 w-px
    bg-[var(--color-border)]
  `,
};
