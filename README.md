## node-jscover - - A JavaScript code coverage measurement tool

node version of [JSCover](https://github.com/tntim96/JSCover).  only support file system instrument.

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

* all arguments

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">short name</th>
        <th style="width: 100px;">full name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>-d</td>
        <td>--dir</td>
        <td>String</td>
        <td></td>
        <td>directory of javascript source files</td>
    </tr>
    <tr>
        <td>-o</td>
        <td>--out</td>
        <td>String</td>
        <td></td>
        <td>destination directory of instrumented javascript source files</td>
    </tr>
    <tr>
        <td>-f</td>
        <td>--front</td>
        <td>Boolean</td>
        <td>false</td>
        <td>whether output JSCover front-end files to destination directory</td>
    </tr>
    </tbody>
</table>

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

##### String instrument(String code, String fileName): return instrumented code

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>code</td>
        <td>String</td>
        <td>code to be instrumented</td>
    </tr>
    <tr>
            <td>fileName</td>
            <td>String</td>
            <td>fileName of code</td>
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

