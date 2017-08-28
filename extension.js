var vscode = require('vscode');

function activate(context) {
    let pretty = vscode.commands.registerCommand('svgo.pretty', function () {
        let editor = vscode.window.activeTextEditor;
        if (!editor) return;
        let text = editor.document.getText();

        console.log('pretty', text)
        vscode.window.showInformationMessage('pretty done');
    });

    context.subscriptions.push(pretty);

    let minify = vscode.commands.registerCommand('svgo.minify', function () {
        let editor = vscode.window.activeTextEditor;
        if (!editor) return;
        let text = editor.document.getText();

        console.log('minify', text)
        vscode.window.showInformationMessage('minify done');
    });

    context.subscriptions.push(minify);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
