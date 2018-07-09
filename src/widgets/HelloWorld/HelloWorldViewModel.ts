/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Accessor = require("esri/core/Accessor");

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";

@subclass("widgets.HelloWorld.HelloWorldViewModel")
class HelloWorldViewModel extends declared(Accessor) {

  @property()
  name = "Slagathor";

  constructor() {
    super();
  }

}

export default HelloWorldViewModel;
