const supertest = require('supertest');
const chai = require('chai');
const app = require('../../src/app');

global.app = app;
global.request = suprtest(app);
