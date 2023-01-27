#!/usr/bin/env node
require("dotenv").config();
const { execSync } = require("child_process");
const chalk = require("chalk");

const RELATIVE_PATH_TO_AUI = process.env.RELATIVE_PATH_TO_AUI;
if (!RELATIVE_PATH_TO_AUI) {
    console.log(chalk.red("Missing RELATIVE_PATH_TO_AUI\nEXITING"));
    process.exit(1);
}

function executeCommand(cmd) {
    return execSync(cmd).toString();
}

function log(msg) {
    console.log(chalk.green(msg));
}

log("\nBuild AsurionUI");
executeCommand(`cd ${RELATIVE_PATH_TO_AUI} && yarn build:core`);

log("Clear Gatsby's cache");
executeCommand(`gatsby clean`);

log("Uninstall current AsurionUI");
try {
    executeCommand(
        `yarn remove @soluto-private/mx-asurion-ui-react 2>&1 >/dev/null`
    );
} catch (err) {
    console.log(chalk.red(`Dependency not found`));
}

console.log(chalk.green("Reinstall AsurionUI"));
executeCommand(
    `yarn add "file:${RELATIVE_PATH_TO_AUI}asurion-ui-react" 2>&1 >/dev/null`
);

log("\nSUCCESS!\n");
