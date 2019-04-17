# 解析sourceMap

通过sourceMap文件解析出原错误信息

# Install

`npm install analysis_sourcemap_error -g`

## Use

全局安装完成后执行全局命令：**resolveSourceMap**。全局命令需要三个参数，见Options说明

## Options

- [mapFilePath] sourceMap本地文件路径（绝对地址）
- [lineNumber] 原错误行号
- [columnNumber] 原错误列号

## Result

输出错误文件名、行号、列号及错误信息