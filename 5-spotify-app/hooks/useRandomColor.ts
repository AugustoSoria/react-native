const colors: { [key: number]: string } = {
  1: "#016450",
  2: "#DC148C",
  3: "#8400E7",
  4: "#1E3264",
  5: "#608108",
  6: "#477D95",
  7: "#509BF5",
  8: "#0D73EC",
  9: "#8E66AC",
  10: "#777777",
  11: "#E91429",
  12: "#E13300",
};

export default function useRandomColor(): string {
  const random = Math.floor(Math.random() * 12) + 1;
  const color = colors[random];
  return color;
}
