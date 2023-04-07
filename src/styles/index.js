import { createContext } from 'react';

const getStyles = () => {
  const moduleFiles = require.context('../styles', true, /\.module\.css$/);
  const styles = {};

  moduleFiles.keys().forEach((filename) => {
    const module = moduleFiles(filename);

    for (const key in module) {
      if (Object.prototype.hasOwnProperty.call(module, key)) {
        styles[key] = { ...styles[key], ...module[key] };
      }
    }
  });

  return styles;
};

const styles = getStyles();

export default styles;
