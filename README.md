# Vs-Logger

[![GitHub](https://img.shields.io/github/license/faultyblaster/vs-logger)](https://github.com/faultyblaster/vs-logger)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/faultyblaster/vs-logger)](https://github.com/faultyblaster/vs-logger)
[![npm](https://img.shields.io/npm/dw/vs-logger)](https://www.npmjs.com/package/vs-logger)
[![GitHub issues](https://img.shields.io/github/issues/faultyblaster/vs-logger)](https://github.com/faultyblaster/vs-logger/issues)

Wrapper around the vscode API to log messages to the output channel of your extension.

## Description

This is a simple logger for vscode extensions. It is based on the [vscode](https://code.visualstudio.com/api/references/vscode-api) API.

It simply exposes three functions that you can use to log messages to the output channel of your extension.

## Usage

```typescript
import { VsLogger } from 'vs-logger';

const logger = new VsLogger('MyExtension');

logger.logInfo('Hello World');
logger.logError('An error occurred');
logger.logWarning('This is a warning');
```

### Output

The output will look like this (on a `vscode` output channel):

``` log
[3/12/2025, 9:21:55 AM] [INFO   ]: Logger successfully initialized for MyExtension
[3/12/2025, 9:21:55 AM] [INFO   ]: Hello World
[3/12/2025, 9:21:55 AM] [ERROR  ]: An error occurred
[3/12/2025, 9:21:55 AM] [WARNING]: This is a warning
```

And that's it! The message will be logged to the output channel of your extension.

## Thanks
