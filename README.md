## node-jscover - - A JavaScript code coverage measurement tool

node version of [JSCover](https://github.com/tntim96/JSCover). only support file system instrument.

### use command line tools

* install jscover globally

    ``` javascript
    npm install node-jscover -g
    ```

* instrument supplied directory of javascript files(**/lib**) and save result to another directory(**/out**)

    ```
    jscover -d /lib -o /out
    ```

  similar to java version:

  ```
  java -jar JSCover-all.jar -fs /lib /out
  ```

### use api

* install jscover locally

    ``` javascript
    npm install node-jscover
    ```

* get jscover

    ``` javascript
    var jscover = require('node-jscover');
    ```

#### method

##### String instrument(String code, String fileName): 返回对参数代码进行 instrument (添加统计代码执行的语句) 后的代码

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">参数名</th>
        <th style="width: 50px;">类型</th>
        <th style="width: 130px;">默认值</th>
        <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>code</td>
        <td>String</td>
        <td></td>
        <td>待 instrument 的代码字符串</td>
    </tr>
    <tr>
            <td>fileName</td>
            <td>String</td>
            <td></td>
            <td>代码所在的文件名称（路径），用于统计界面的显示</td>
        </tr>
    </tbody>
</table>

example

``` javascript
    var jscover = require('node-jscover');
    console.log(jscover.instrument('var x=1;','test.js'));
    // ->  _$jscoverage['test.js'].lineData[0]++;
    // ->  var x = 1;
```

