#!/usr/bin/env node

var fs = require('fs');
var SourceMapConsumer = require('source-map').SourceMapConsumer;

resolve();

async function resolve() {
    var options = process.argv.slice(2);
    var mapFilePath = options[0];
    if (isEmpty(mapFilePath)) {
        console.log("命令行中缺少map文件路径！");
        return;
    }
    var line = options[1];
    if (isEmpty(line)) {
        console.log("命令行中缺少错误行数参数！");
        return;
    }
    var column = options[2];
    if (isEmpty(column)) {
        console.log("命令行中缺少错误列数参数！");
        return;
    }
    var consumer = await new SourceMapConsumer(fs.readFileSync(mapFilePath, "utf-8"));
    var result = consumer.originalPositionFor({
        line: parseInt(line),
        column: parseInt(column)
    });
    console.log("还原错误信息如下：");
    console.log("source:", result.source);
    console.log("line:", result.line);
    console.log("column:", result.column);
    console.log("name:", result.name);
}

function isEmpty(data) {
    if (data == undefined || data == null || data == '') {
        return true;
    }
    return false;
}