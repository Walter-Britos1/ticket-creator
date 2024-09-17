export const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const dateStringFormatted = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeStringFormatted = date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return { dateStringFormatted, timeStringFormatted };
};
