export const textPreview = (
  text: string,
  screenWidth: number,
  open: boolean,
): string => {
  if (!open && screenWidth < 768) return text.slice(0, 80) + '...'
  return text
}
