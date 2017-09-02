# Project: Scheduler

The purpose of this project is to teach how to use async-await, EventEmitters, Common design patterns. The project has several modules, which will be described below. Usage of patterns, common practices, native modules during development is strongly advised. At the end of the development, the developer will learn how to build a Node.js app in microservice-architecture, use the native modules and the common, scalable practices well.

## Environment

* Node.js 8.x
* Yarn
* External libraries are excluded

## Development

The app should be developed iteratively: every level has more-and-more features, its modules works better together.

### I. iteration

The task in the first iteration is to create a simple one-process scheduler. There are the following modules: 
* Task emitter: generate tasks random intervals, and send to process, wait for the result
* Task solver: wait for the tasks, process them and send back their results
* Task manager: wait for the tasks or the results, store and schedule them, then send to the corresponding handler

You have to use the Factory and the Flyweight pattern for these modules.
