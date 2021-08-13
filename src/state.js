import {Agile} from "@agile-ts/core";

// Create Agile Instance
export const AgileApp = new Agile();

// Create State with initial value 'Hello World'
export const Token = AgileApp.createState('', {key: "myFirstState"});