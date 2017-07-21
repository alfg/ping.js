module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("pingjs.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n",
			bannerMin: "/* " +
				"<%= pkg.title || pkg.name %> - v<%= pkg.version %>" +
				" <%= pkg.homepage %> */\n" 
		},

		// Concat definitions
		concat: {
			js: {
				src: ["src/ping.js"],
				dest: "dist/ping.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/ping.js"],
			options: {
				jshintrc: ".jshintrc",
				reporterOutput: ""
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/ping.js"],
				dest: "dist/ping.min.js"
			},
			options: {
				banner: "<%= meta.bannerMin %>"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);

};
