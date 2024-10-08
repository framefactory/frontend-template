/**
 * Webpack project configuration
 * Version 4.7 Front-End
 * 
 * Copyright 2024 Ralph Wiedemeier, Frame Factory GmbH
 * License: MIT
 */

"use strict";

import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import * as path from "path";
import * as utils from "./webpack.utils.js"

const projectDir = path.resolve(process.env.PWD, "..");
const libDir = path.resolve(projectDir, "libs");
const projectVersion = utils.getGitDescription();

export default utils.createWebpackConfig({
    projectVersion,
    defaultTarget: "web",
    useDevServer: true,

    folders: {
         // source code
        source: path.resolve(projectDir, "src"),
        // built code
        output: path.resolve(projectDir, "public/built"),
        static: path.resolve(projectDir, "public/static"),
        modules: [ "node_modules" ],
        jsFolder: "", // "js/",
        cssFolder: "", // "css/",

        assets: [{
            from: path.resolve(projectDir, "assets"),
            to: path.resolve(projectDir, "public/static"),
        }],
    },

    // import aliases
    aliases: {
        "@ffweb/core": path.resolve(libDir, "core/src"),
        "@ffweb/browser": path.resolve(libDir, "browser/src"),
        "@ffweb/ui": path.resolve(libDir, "ui/src"),
        "@ffweb/lit": path.resolve(libDir, "lit/src"),
    },

    // project components to be built
    components: {
        "default": {
            // bundle output name
            bundle: "index",
            // output subdirectory
            subdir: "lit-app",
            // see https://webpack.js.org/configuration/target/
            target: "web",
            // page title
            title: "Lit App",
            // component version, uses project version if omitted
            version: projectVersion,
            // entry point relative to source folder
            entry: "lit-app/index.ts",
            // HTML template relative to source folder
            template: "lit-app/index.hbs",
            // root HTML element for lit-element applications
            element: "<ff-application></ff-application>",
            // Path prefix for assets referenced in the HTML template
            publicPath: "",
        },
        "react": {
            // bundle output name
            bundle: "index",
            // output subdirectory
            subdir: "react-app",
            // see https://webpack.js.org/configuration/target/
            target: "web",
            // page title
            title: "React App",
            // component version, uses project version if omitted
            version: projectVersion,
            // entry point relative to source folder
            entry: "react-app/index.tsx",
            // HTML template relative to source folder
            template: "react-app/index.hbs",
            // Path prefix for assets referenced in the HTML template
            publicPath: "",
        }
    }
});
