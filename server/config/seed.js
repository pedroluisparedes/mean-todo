/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Todo = require('../api/todo/todo.model');

Todo.find({}).remove(function() {
  Todo.create({
    description: 'Be a hero',
    done: true
  }, {
    description: 'Learn AngularJS',
    done: false
  }, {
    description: 'Sharp JS skills.',
    done: false
  });
});