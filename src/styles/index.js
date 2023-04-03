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

export default styles;
