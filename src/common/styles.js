export const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,
};

export const colors = {
  accent: '#8A84E2',
  background: 'rgb(249, 249, 254)',
  black: '#323643',
  dark: '#41463D',
  deepBlack: '#000',
  gray2: '#C5CCD6',
  green: 'rgb(150, 255, 150)',
  light: '#B8CDF8',
  red: 'rgb(255,100,100)',
  secondary: '#95F2D9',
  transparent: '#00000000',
  white: '#FFFFFF',
};

export const shadow = () => {
  return {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.13,
    shadowRadius: 3.62,
    elevation: 2,
  };
};

export const defaultHeader = {
  borderBottomWidth: 0,
  elevation: 0,
  height: 64,
  backgroundColor: colors.background,
};

export const headerTitle = {
  color: colors.dark,
  fontWeight: 'bold',
  fontSize: 20,
  opacity: 0.8,
};
