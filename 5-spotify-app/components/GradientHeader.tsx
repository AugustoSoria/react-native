import { LinearGradient } from 'expo-linear-gradient';

interface props {
  color: string
}

function GradientHeader({ color }: props) {
  console.log("color: " + color)
  return (
    <LinearGradient
      colors={[color, '#000000' ]}
      locations={[0, 0.95]}
      style={{ flex: 1 }}
    />
  );
}

export default GradientHeader;