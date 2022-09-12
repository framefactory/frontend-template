/**
 * Webpack project configuration
 * Version 3.8
 * 
 * Copyright 2022 Ralph Wiedemeier, Frame Factory GmbH
 * License: MIT
 */

"use strict";

const path = require("path");

const projectDir = path.resolve(__dirname, "..");
const modulesDir = path.resolve(projectDir, "node_modules")

require("dotenv").config({ path: path.resolve(projectDir, ".env") });

const utils = require("./webpack.utils")
const projectVersion = utils.getGitDescription()

module.exports = utils.createWebpackConfig({
    projectVersion,
    defaultTarget: "web",
    useDevServer: true,

    folders: {
        // source code
        source: path.resolve(projectDir, "src"),
        // built code
        output: path.resolve(projectDir, "public/built"),
        // source static assets
        // assets: path.resolve(projectDir, "assets"),
        // destination static assets
        static: path.resolve(projectDir, "public/static"),
        modules: modulesDir,
        jsFolder: "", // "js/",
        cssFolder: "", // "css/",
    },

    // import aliases
    aliases: {
        "@ff/core": path.resolve(modulesDir, "@framefactory/core/src"),
        "@ff/browser": path.resolve(modulesDir, "@framefactory/browser/src"),
        "@ff/ui": path.resolve(modulesDir, "@framefactory/ui/src"),
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
            title: "lit-template",
            // component version, uses project version if omitted
            version: projectVersion,
            // entry point relative to source folder
            entry: "lit-app/index.ts",
            // HTML template relative to source folder
            template: "lit-app/index.hbs",
            // root HTML element for lit-element applications
            element: "<ff-application></ff-application>",
        },
        "react": {
            // bundle output name
            bundle: "index",
            // output subdirectory
            subdir: "react-app",
            // see https://webpack.js.org/configuration/target/
            target: "web",
            // page title
            title: "react-template",
            // component version, uses project version if omitted
            version: projectVersion,
            // entry point relative to source folder
            entry: "react-app/index.tsx",
            // HTML template relative to source folder
            template: "react-app/index.hbs",
        }
    }
});
