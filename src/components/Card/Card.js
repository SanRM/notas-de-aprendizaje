const COLORS = {
  default: 'var(--ifm-color-emphasis-200)', // Color por defecto
  pink: 'rgba(255, 0, 172, 0.5)',
  red: 'rgba(255, 0, 0, 0.5)',
  blue: 'rgba(0, 204, 255, 0.5)',
  green: 'rgba(0, 255, 0, 0.5)',
  yellow: 'rgba(255, 247, 0 , 0.5)',
  orange: 'rgba(255, 165, 0, 0.5)',
  cyan: 'rgba(0, 255, 205, 0.5)',
  magenta: 'rgba(255, 0, 255, 0.5)',
  darkBlue: 'rgba(0, 89, 255, 0.5)',
  white: 'rgba(255, 255, 255, 0.5)', // Color blanco agregado
  // Versiones sólidas de los colores
  solid: {
    pink: 'rgba(255, 0, 172, 1)',
    red: 'rgba(255, 0, 0, 1)',
    blue: 'rgba(0, 204, 255, 1)',
    green: 'rgba(0, 255, 0, 1)',
    yellow: 'rgba(255, 247, 0, 1)',
    orange: 'rgba(255, 165, 0, 1)',
    cyan: 'rgba(0, 255, 205, 1)',
    magenta: 'rgba(255, 0, 255, 1)',
    darkBlue: 'rgba(0, 89, 255, 1)',
    white: 'rgba(255, 255, 255, 1)',
  }
};

function getLighterBackgroundColor(colorName, solidBackground = false) {
  if (solidBackground) {
    return COLORS.solid[colorName] || COLORS.default;
  } else {
    const lightColors = {
      default: 'var(--ifm-color-emphasis-100)', // Color de fondo por defecto
      pink: 'rgba(255, 0, 172, 0.05)',
      red: 'rgba(255, 0, 0, 0.05)',
      blue: 'rgba(0, 204, 255, 0.05)',
      green: 'rgba(0, 255, 0, 0.05)',
      yellow: 'rgba(255, 247, 0 , 0.05)',
      orange: 'rgba(255, 165, 0, 0.05)',
      cyan: 'rgba(0, 255, 205, 0.05)',
      magenta: 'rgba(255, 0, 255, 0.05)',
      darkBlue: 'rgba(0, 89, 255, 0.05)',
      white: 'rgba(255, 255, 255, 0.05)', // Color de fondo más claro para blanco
    };
    return lightColors[colorName] || lightColors.default;
  }
}

export default function Card({children, color = 'default', solidBackground = false}) {
  const borderColor = COLORS[color] ? COLORS[color] : COLORS.default;
  const backgroundColor = getLighterBackgroundColor(color, solidBackground);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderRadius: '5px',
        padding: '20px 20px 0px 20px',
        margin: '5px 0px 20px 0px',
        border: `1px solid ${borderColor}`,
        color: 'var(--ifm-color-emphasis-900)',
      }}>
      {children}
    </div>
  );
}