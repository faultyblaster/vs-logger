import * as vscode from 'vscode';

/**
 * VsLogger implementation for use in vscode extensions, simple, easy to use.
 */
export class VsLogger {
    channel: vscode.OutputChannel | undefined;

    private initializeChannel(name: string) {
        if (this.channel === undefined) {
            this.channel = vscode.window.createOutputChannel(name, 'log');
        }
        this.logInfo(`Logger successfully initialized for ${name}`);
    }
    public logInfo(message: string): void {
        let date = new Date(Date.now());
        this.channel?.appendLine(
            `[${date.toLocaleString()}] [INFO   ]: ${message}`
        );
    }
    public logWarning(message: string): void {
        let date = new Date(Date.now());
        this.channel?.appendLine(
            `[${date.toLocaleString()}] [WARNING]: ${message}`
        );
    }
    public logError(message: string): void {
        let date = new Date(Date.now());
        this.channel?.appendLine(
            `[${date.toLocaleString()}] [ERROR  ]: ${message}`
        );
    }
    constructor(name: string) {
        this.initializeChannel(name);
    }
}
