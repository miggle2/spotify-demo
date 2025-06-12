export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

export const formatDuration = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
