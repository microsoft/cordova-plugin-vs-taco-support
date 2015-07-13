Visual Studio Tools for Apache Cordova (TACo) Cordova CLI Support Plugin
===============
**Note: Version 0.1.0 uses a different plugin ID than previous versions that is more 5.0.0+ / npm compatible. Remove versions of the plugin with the old ID when installing this updated version.**

License: MIT

This is a sample Cordova plugin designed to add in support three two Visual Studio [Tools for Apache Cordova](http://aka.ms/cordova) features along with number of workarounds for Cordova issues such that they work with the standard Cordova CLI and deriviatives like the Ionic CLI or PhoneGap CLI. Specifically:

- Support for the VS res/native folder structure and Task Runner Explorer 
- Support for VS specific config.xml elements for Windows packaging
- Support for generating an appxbundle for Windows, Windows Phone
- Removing bad plugin related json files when associated platforms folder is not present
- Fixing symlinks for iOS custom frameworks inside plugins as needed
- Fixing missing execute bits on Cordova platform scripts on OSX as needed

The plugin can also be safely installed and used with Visual Studio projects as the plugin does not interfere with normal operation.
##Installation
From Visual Studio:

1. Open the config.xml designer by double clicking on the file
2. Select the "Plugins" > "Custom"
3. Select "Git"
3. Enter in "https://github.com/Chuxel/taco-cordova-support-plugin.git" and press the arrow
4. Click "Add"

From the command line:

1. Install the Cordova CLI
2. Navigate to your project root
3. Type "cordova plugin add https://github.com/Chuxel/taco-cordova-support-plugin.git"

##Using the Visual Studio 2015 Task Runner Explorer
The Visual Studio Task Runner Explorer allows users to tie Gulp tasks to specific build events. To use the Task Runner Explorer:

1. Go to View > Other Windows > Task Runner Explorer
2. You will now see any gulpfiles you have in your project. (Hit the refresh icon if you added one after opening the window.)
3. To bind a task to an event, right click on the task, go to Bindings, and select the event you want

**Note: The plugin currently only works if "gulpfile.js" is in the root of the project. In addition, Clean and ProjectOpened do not have direct analogs in the Cordova CLI and are currently ignored.**

This results in a comment being added to gulpfile.js with the bindings.  Ex:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// <binding BeforeBuild='before-build-gulp-task' AfterBuild='after-build-gulp-task' Clean='after-build-gulp-task' ProjectOpened='before-build-gulp-task' />
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This plugin maps hooks the BeforeBuild task into the Cordova CLI before\_prepare event and the AfterBuild task to the Cordova CLI after\_compile event.  These same events are fired by the cordova "build" command which combines "prepare" and "compile" in one comand while still allowing each of these commands to function separatley.

While not supported via Visual Studio UI, you can wire in Gulp tasks to additiona Cordova hooks by simply using the hook name using the syntax above. Ex:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// <binding after_prepare='after-prepare-gulp-task' />
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The plugin also automatically detects if Gulp is not installed in the node_modules folder in your project and will "npm install" the contents of package.json in your project to further streamline development.

## Terms of Use
By downloading and running this project, you agree to the license terms of the third party application software, Microsoft products, and components to be installed. 

The third party software and products are provided to you by third parties. You are responsible for reading and accepting the relevant license terms for all software that will be installed. Microsoft grants you no rights to third party software.


## License
Unless otherwise mentioned, the code samples are released under the MIT license.

```
The MIT License (MIT)

Copyright (c) Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

