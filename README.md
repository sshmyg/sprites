# grunt-sprites

> Generate sprites separated by folders, with [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith).
Main idea is generate files in separate folders.
It's a wrapper for [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sprites --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sprites');
```

## The "sprites" task

### Overview
In your project's Gruntfile, add a section named `sprites` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sprites: {
    options: {
      baseDir : 'path/to/dir/with/subdirs',
      imgType : ['png, jpeg'],
      //Support all grunt-spritesmith options
      initSpritesmithConfig : function(folderName) {
        return {
          //src : '', NO NEED
          engine : 'pngsmith',
          cssTemplate: 'app/css/less.template.mustache',
          destImg : 'app/images/sprites/' + folderName + '.png',
          destCSS : 'app/css/less/' + folderName + '.less',
          cssFormat : 'less'
        };
      }
    }
  },
});
```

### Options

#### options.baseDir
Type: `String`  
Default value: `undefined`  

Folder which contain subfolders with sprites images
SPRITES_FOLDER > 
                sub-sprite1 >
                              image1
                              image2
                sub-sprite2 >
                              image1
                              image2
                sub-sprite3 >
                              image1
                              image2

#### options.imgType
Type: `String`  
Default value: `[png]`  

Images type (supports all type as [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith) support)


#### options.initSpritesmithConfig
Type: `Function`  
Default value: `undefined`  
Returns value: `Object`  

Spritesmith dynamic configuration;
Returns object with [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith) configuration.
Param __SRC__ NO NEEDED, and all other options are supports.

### Usage Examples
```js
grunt.initConfig({
  sprites : {
    options : {
      baseDir : '<%= loc.img_sprite %>',
      imgType : ['png', 'jpeg']
      initSpritesmithConfig : function(folderName) {
        return {
          //src : '', NO NEED
          engine : 'pngsmith',
          cssTemplate: 'app/css/less.template.mustache',
          destImg : 'app/images/sprites/' + folderName + '.png',
          destCSS : 'app/css/less/' + folderName + '.less',
          cssFormat : 'less'
        };
      }
    }
  }
});
```

##### Thanks [Ensighten](https://github.com/Ensighten) for the grate plugin [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)
