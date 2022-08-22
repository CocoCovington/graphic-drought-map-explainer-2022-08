module.exports = {
  /**
   * A unique identifier that's generated when a project is created. Used to
   * sync up asset and workspace deploys.
   * DO NOT CHANGE.
   */
  id: 'GRWBCPS0djfeX4slHT2PW',
  /**
   * Month that the project was created.
   * DO NOT CHANGE.
   */
  createMonth: '08',
  /**
   * Year that the project was created.
   * DO NOT CHANGE.
   */
  createYear: '2022',
  /**
   * Time that the project was last rebuilt with `build.js`.
   * The lastBuildTime is when the project was created before the first build.
   * DO NOT CHANGE. Automatically updated.
   */
  lastBuildTime: '2022-08-19T19:04:55.549Z',
  /**
   * What project type was passed in on creation.
   * DO NOT CHANGE.
   */
  projectType: 'graphic',
  /**
   * What project name was passed in on creation and is part of the repository name.
   * Project names are passed in as slugs, i.e. 'my-beatiful-project'
   * DO NOT CHANGE.
   */
  projectName: 'drought-map-explainer',
  /**
   * The destination S3 bucket for a deploy.
   * `capybara-test` is the test bucket.
   * YOU CAN CHANGE THIS. Change to `graphics.texastribune.org` when publishing.
   */
  bucket: 'capybara-test.texastribune.org',
  /**
   * The folder (or "Key" in S3 lingo) to deploy the project into.
   * This is the slug in the project URL.
   * YOU CAN CHANGE THIS.
   */
  folder: 'graphics/drought-map-explainer-2022-08',
  /**
   * The S3 bucket that's used to store raw asset and workspace files.
   * DO NOT CHANGE.
   */
  assetsBucket: 'data-visuals-raw-assets',
  /**
   * Any Google Doc and Google Sheet files to be synced with this project.
   * YOU CAN CHANGE THESE.
   */
  files: [
    {
      fileId: '1txy_V1JfjH_q7HXyCC77vYwbSsubPVvT2SqnTlhdcrk',
      type: 'doc',
      name: 'text',
    },
  ],
  /**
   * The dataMutators option makes it possible to modify what's returned by
   * the data fetchers. This is a good place to restructure the raw data, or
   * to do joins with other data you may have.
   *
   * Example:
   * dataMutators: {
   *   // the function name should match one of the `name` values in `files`
   *   votes(originalData) {
   *   // what you return in this function is what ends up in the JSON file
   *   return originalData;
   * },
  },
   */
  dataMutators: {},
  /**
   * `createAPI` makes it possible to bake out a series of JSON files that get
   * deployed with your project. This is a great way to break up data that users
   * only need a small slice of based on choices they make. The toolkit expects
   * this to return an array of objects. Each object should have a "key" and
   * a "value" - the "key" determines the URL, the "value" is what is saved at
   * that URL.
   */
  createAPI(data) {
    return null;
  },
  /**
   * Where custom filters for Nunjucks can be added. Each key should be the
   * name of the filter, and each value should be a function it will call.
   *
   * (journalize comes built in and does not need to be added manually.)
   *
   * Example:
   * customFilters: {
   *   square: (val) => val * val;
   * };
   *
   * Then in your templates:
   * {{ num|square }}
   *
   */
  customFilters: {},
  /**
   * Where custom settings for parsing graphics can be added.
   *
   * metadataIgnore
   * Add paths here that you do not want parsed for metadata and shown
   * in the graphics plugin in the CMS.
   *
   * appleNewsIgnore
   * Some graphics are too dynamic to be accurately captured in a screenshot.
   * Those graphics shouldn't be considered for platforms like Apple News.
   *
   * Paths for metadataIgnore and appleNewsIgnore are relative to the build folders.
   * Example:
   * appleNewsIgnore: [
   *  'complex-graphic-folder/index.html',
   *  'some-other-folder',
   * ],
   *
   */
  parserOptions: {
    metadataIgnore: [],
    appleNewsIgnore: [],
  },
};
