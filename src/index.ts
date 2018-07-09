import "./config";

import "@dojo/shim/Promise";

import App from "./widgets/app";
import HelloWorld from "./widgets/helloworld";


/**
 * Initialize application
 */
export const app = new App({
  appName: "My Template App",
  container: document.getElementById("app") as HTMLElement
});

// export const helloWorld = new HelloWorld({});
