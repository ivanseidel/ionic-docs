export const config = {
  globalStyle: 'src/styles/global.css',
  outputTargets: [
    {
      type: 'www',
      dir: 'www/docs',
      baseUrl: '/docs',
      serviceWorker: null
    }
  ],
  copy: [
    { src: 'documents/**/*.json' }
  ]
};
