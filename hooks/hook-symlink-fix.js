/*
  Copyright (c) Microsoft. All rights reserved.  
  Licensed under the MIT license. See LICENSE file in the project root for full license information.
*/
var fs = require("fs");
var path = require("path");
var glob;

module.exports = function(context) {
  if(process.platform =="darwin") {

    glob=context.requireCordovaModule("glob"); 
    
    glob("platforms/ios/*/Plugins/**/*.framework/**/*", function(err, possibleLinks) {
      if(err) throw err;
      possibleLinks.forEach(function(possibleLink) {
        possibleLink = path.join(context.opts.projectRoot, possibleLink);
        if(path.basename(possibleLink).indexOf(".") < 0) {
          var stat = fs.statSync(possibleLink);
          if(stat.isFile() && stat.size < 1024 ) {
            var srcPath = fs.readFileSync(possibleLink, "utf8");
            if(fs.existsSync(path.join(possibleLink, "..", srcPath))) {
              console.log("Reparing symlink " + possibleLink);
              fs.unlinkSync(possibleLink);
              fs.symlinkSync(srcPath,possibleLink);
            } 
          }
        }
      });
    });
  }
}
