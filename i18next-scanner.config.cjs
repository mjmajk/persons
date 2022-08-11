module.exports = {
  input: ['src/**/*.{ts,tsx}'],
  output: 'src/locale',
  options: {
    func: {
      list: ['t'],
      extensions: ['.ts', '.tsx'],
    },
    trans: false,
    lngs: ['en'],
    defaultLng: 'en',
    defaultNs: 'common',
    defaultValue: (lng, ns, key) => `missing - ${lng}.${ns}.${key}`,
    resource: {
      loadPath: './src/locale/{{lng}}.json',
      savePath: '{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    keySeparator: '.',
  },
}
