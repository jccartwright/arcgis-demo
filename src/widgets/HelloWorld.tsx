/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget = require("esri/widgets/Widget");

import HelloWorldViewModel from "./HelloWorld/HelloWorldViewModel";

const CSS = {
  base: "esri-widget helloworld-base"
};

@subclass("widgets.HelloWorld")
export default class HelloWorld extends declared(Widget) {

  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  @property({
    type: HelloWorldViewModel
  })
  viewModel= new HelloWorldViewModel();

  render() {
    return (
      <div class={CSS.base}>
        <p>
          Welcome {this.name}!
        </p>
      </div>
    );
  }

}

// export = HelloWorld;