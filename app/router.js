import EmberRouter from '@ember/routing/router';
import config from 'reproduce-read-before-write-assertion-on-ember-local-storage-decorator/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
