const baseTitle = "THINK";

export const appTitle = (title?: string): string => {
  return title && title.trim().length !== 0
    ? `${title} | ${baseTitle}`
    : baseTitle;
};
