export const timeMask = (time: number): string => {
  const hours = Math.floor(time / 60)
  const minuts = time % 60

  const hoursMessage = `${String(hours).padStart(2, '0')} hora${
    hours > 1 ? 's' : ''
  }`
  const minutsMessage = `${String(minuts).padStart(2, '0')} minuto${
    minuts > 1 || minuts === 0 ? 's' : ''
  }`
  if (hours) return `${hoursMessage} e ${minutsMessage}`
  return minutsMessage
}
