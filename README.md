# Lyle's Blazor Website Example

## Introduction

This repository is simple Blazor .NET Aspire web app that can be used as an example for CICD deploys, unit testing, Playwright UI testing, and integration of all of that into pipelines.

This project has fully automated CI/CD pipelines with Bicep templates for all of the Azure Resources needed for this application.

[![Open in vscode.dev](https://img.shields.io/badge/Open%20in-vscode.dev-blue)][1]

[1]: https://vscode.dev/github/lluppesms/aspireapp.blazor.net8.web/

[![azd Compatible](./docs/images/AZD_Compatible.png)](/.azure/readme.md)

## TODO:

- I haven't tested the GH Actions deploy yet
- I haven't tested the AZ UP deploy command yet
- The API is not working right so the weather page is broken (app misconfiguration?)
- The Aspire Unit Tests are occasionally failing in the pipeline - not sure why...?
