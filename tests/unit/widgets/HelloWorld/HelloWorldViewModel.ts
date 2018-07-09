import HelloWorldViewModel from "../../../../../src/app/widgets/HelloWorld/HelloWorldViewModel";

import td = require("testdouble");

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("app/widgets/HelloWorld/HelloWorldViewModel", () => {
  let vm: HelloWorldViewModel;

  beforeEach(() => {
    vm = new HelloWorldViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
