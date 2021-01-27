import Application from 'reproduce-read-before-write-assertion-on-ember-local-storage-decorator/app';
import config from 'reproduce-read-before-write-assertion-on-ember-local-storage-decorator/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
