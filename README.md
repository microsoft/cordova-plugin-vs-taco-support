### As of March 2019, this repo is no longer maintained by Microsoft. If you're interested in continuing this project, please feel free to fork it. As of March 2019, we will no longer monitor or respond to open issues. Thanks for your support!

---

Cordova CI Support Plugin (cordova-plugin-vs-taco-support)
===============
License: MIT

The primary intent of this plugin is to resolve issues commonly associated with Cordova CLI-compliant apps (Ex: Cordova, Ionic, PhoneGap local) checked into source control and adds features (res/native) to help developers avoid having to check in the "platforms" folder as this can cause problems particularly if different members of a developer team are on a combination of OSX, Windows, or Linux. It was originally created as part of a tutorial for [Tools for Apache Cordova](http://aka.ms/cordova).

Specifically, it:

- Adds in support for the res/native folder that will overlay the contents of the platforms folder so you can add files to the native project without checking native code into source control (via a plugin) - Ex: res/native/Android/AndroidManifest.xml will overwrite the default one before Cordova's "prepare" step.
- Removes plugins/android.json, plugins/ios.json, plugins/windows.json, or plugins/wp8.json files which can cause strange results if present when adding a platform. (Though files are not removed if the Cordova platforms folder was added to source control.)
- Fixes for problems with symlinks and execute bits being lost when a plugin or platform is added to source control from Windows (via a plugin) - A common problem for plugins that contain iOS "frameworks".
- Adds some Windows packaging features and bug fixes (via a plugin) designed for use with versions of Cordova that pre-date the Windows platform's support of build.json

##Installation

From the command line:

1. Install the Cordova CLI (or another compliant CLI)
2. Navigate to your project root
3. Type "cordova plugin add cordova-plugin-vs-taco-support"

From Visual Studio:

1. Open the config.xml designer by double clicking on the file
2. Select the "Plugins" > "Custom"
3. Select "Git"
3. Enter in "https://github.com/Microsoft/cordova-plugin-vs-taco-support.git" and press the arrow
4. Click "Add"

*Note: Cordova 5.1.1 has a bug that can cause plugins installed from a Git repo to fail if the project is on a different drive than your temp folder. Either move the project to the same drive when installing or you can instead download a copy, unzip it, and add the plugin from the filesystem.*

## FAQ
**Q: What happened to the Visual Studio Task Runner Explorer bindings in this plugin?** <br /> 
A: In an effort to make this plugin less specific to Visual Studio, the plugin no longer includes support for executing Task Runner Explorer bindings from the command line. However, you can check out [this repository](https://github.com/Chuxel/taco-tricks/tree/master/hook-task-runner-binding) for how to use a Cordova project "hook" to accomplish the same thing.

**Q: Does this require Visual Studio or only run on Windows?** <br /> 
A: Visual Studio is not at all required. All features work on OSX (and some are specifically for it) with the exception of the Windows platform signing feature as that platform can only be built on Windows.

## Terms of Use
By downloading and running this project, you agree to the license terms of the third party application software, Microsoft products, and components to be installed. 

The third party software and products are provided to you by third parties. You are responsible for reading and accepting the relevant license terms for all software that will be installed. Microsoft grants you no rights to third party software.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

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
