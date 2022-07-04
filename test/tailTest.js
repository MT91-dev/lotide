const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [A, 4, Loop] for [Do, A, 4, Loop]", () => {
    assert.deepEqual(tail(["Do", "A", "4", "Loop"]), ["A", "4", "Loop"]); 
  });

});