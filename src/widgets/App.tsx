/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import esri = __esri;

import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

import FeatureLayer = require("esri/layers/FeatureLayer");
import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Widget = require("esri/widgets/Widget");

import AppViewModel, { AppParams } from "./App/AppViewModel";

import { Header } from "./Header";

//import HelloWorld from "./HelloWorld";

interface AppViewParams extends AppParams, esri.WidgetProperties {}

const CSS = {
  base: "main",
  webmap: "webmap"
};

@subclass("app.widgets.webmapview")
export default class App extends declared(Widget) {
  @property() viewModel = new AppViewModel();

  @aliasOf("viewModel.appName") appName: string;

  @aliasOf("viewModel.featureLayer") featureLayer: FeatureLayer;

  @aliasOf("viewModel.map") map: EsriMap;

  @aliasOf("viewModel.view") view: __esri.MapView;

  constructor(params: Partial<AppViewParams>) {
    super(params);
  }

  render() {
    return (
      <div class={CSS.base}>
        {Header({ appName: this.appName })}
        <div class={CSS.webmap} bind={this} afterCreate={this.onAfterCreate} />
      </div>
    );
  }

  private onAfterCreate(element: HTMLDivElement) {
    import("./../data/app").then(({ featureLayer, map }) => {
      this.featureLayer = featureLayer;
      this.map = map;
      this.view = new MapView({
        map: this.map,
        container: element
      });
    });
  }
}
