/*
 * grunt-sprites
 * https://github.com/serheyShmyg/sprites
 *
 * Copyright (c) 2014 Serhey Shmyg
 * Licensed under the MIT license.
 */

'use strict';

var nodeDir = require('node-dir'),
	gruntSpritesmith = require('grunt-spritesmith');

module.exports = function(grunt) {
	var defaults = {
			configParamName :'all',
			imgType : ['png']
		};

	gruntSpritesmith(grunt);

	grunt.registerTask('sprites', 'Generate sprites separeted by folders, with spritesmith', function() {

		var options = this.options(),
			done = this.async(),
			imageType = options.imgType || defaults.imgType,
			folderIndex, folderName, spritesmithConf;

		if (!options.baseDir) throw 'baseDir require';
		if (!options.initSpritesmithConfig) throw 'initSpritesmithConfig require';

		//Nulled sprite conf
		grunt.config('sprite', {});

		nodeDir.subdirs(options.baseDir, function(err, subdirs) {
			if (err || !subdirs.length) {
				grunt.log.error(err || 'No folders');
				done();
				return;
			}

			subdirs.forEach(function(src, i) {
				folderIndex = src.lastIndexOf('/') !== -1 ? src.lastIndexOf('/') : src.lastIndexOf('\\');
				folderName = src.slice(folderIndex + 1);
				spritesmithConf = options.initSpritesmithConfig(folderName);

				spritesmithConf.src = [];

				imageType.forEach(function(type) {
					spritesmithConf.src.push(src + '/**/*.' + type);
				});

				grunt.config('sprite.' + defaults.configParamName + i, spritesmithConf);
			});

			if (!err && subdirs.length) grunt.task.run(['sprite']);

			done();
		});
	});
};