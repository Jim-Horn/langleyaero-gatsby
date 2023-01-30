#!/usr/bin/env node
require("dotenv").config();
const { execSync } = require("child_process");
const chalk = require("chalk");

const RELATIVE_PATH_TO_AUI = process.env.RELATIVE_PATH_TO_AUI;
const BUILD_LOCAL_AUI = process.env.BUILD_LOCAL_AUI === "true";

const silent = `2>&1 >/dev/null`;

function log(msg) {
    console.log(chalk.green(msg));
}

function err(msg) {
    console.log(chalk.red(msg));
}

function executeCommand(cmd) {
    return execSync(cmd).toString();
}

if (BUILD_LOCAL_AUI) {
    log(`Using local AsurionUI`);
    if (!RELATIVE_PATH_TO_AUI) {
        err("Missing RELATIVE_PATH_TO_AUI\nEXITING");
        process.exit(1);
    }
} else {
    err(`Using latest release of AsurionUI`);
}

if (BUILD_LOCAL_AUI) {
    log("Build AsurionUI");
    executeCommand(`cd ${RELATIVE_PATH_TO_AUI} && yarn build:core`);
}

log("Clear Gatsby's cache");
executeCommand(`gatsby clean`);

log("Uninstall current AsurionUI");
try {
    executeCommand(`yarn remove @soluto-private/mx-asurion-ui-react ${silent}`);
} catch (e) {
    err(`Dependency not found`);
}

console.log(chalk.green("Reinstall AsurionUI"));
executeCommand(
    BUILD_LOCAL_AUI
        ? `yarn add "file:${RELATIVE_PATH_TO_AUI}asurion-ui-react" ${silent}`
        : `yarn add @soluto-private/mx-asurion-ui-react ${silent}`
);

log("\nSUCCESS!\n");
