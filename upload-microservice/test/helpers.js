const supertest = require('supertest');
const chai = require('chai');
const setupApp = require('../src/app');

global.supertest = supertest;
global.expect = chai.expect;
