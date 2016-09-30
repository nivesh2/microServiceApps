'use strict';

module.exports = exports = function(){
  const config = require('./config');
  const mongoose = require('mongoose');
  const debug = require('debug')('main:mongoose');

  const db = mongoose.connect(config.db,(err)=>{
    if(err) return debug('error connecting to database');
    debug('Connected to Database.');
  });

  require('../app/model/data.schema');
  return db;
};