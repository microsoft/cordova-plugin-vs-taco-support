Visual Studio Tools for Apache Cordova (TACo) Cordova CLI Support Plugin
===============
**Note: This Cordova plugin is intended to be a sample and is not an offically supported Microsoft product.**

License: MIT

This is a sample Cordova plugin designed to add in support for two Visual Studio [Tools for Apache Cordova](http://aka.ms/cordova) features along with two workarounds for Cordova issues such that they work with the standard Cordova CLI and deriviatives like the Ionic CLI or PhoneGap CLI. Specifically:

- Support for the res/native folder structure
- Workarounds to support for VS specific config.xml elements for Windows packaging
- Fixing symlinks for iOS custom frameworks inside plugins
- Wiring in Gulp tasks as hooks Cordova build events via the Visual Studio 2015 Task Runner Explorer

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
