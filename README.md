# Jekyll Boilerplate
---

A simple Jekyll scaffold that utilizes a Gulp workflow with Boostrap for the UI.

##### V 1.0.0

The Jekyll scaffold uses a [Gulp](https://github.com/gulpjs/gulp) workflow  with [Gulp Sass](https://github.com/dlmanning/gulp-sass), [Gulp Autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer), and [Browser-Sync](https://github.com/BrowserSync/browser-sync).

To get started, either clone the repository or manually download it. Once downloaded, run ``` npm install ``` to install the all of the dependencies. When that is complete, in the terminal, simple type ```gulp``` to get the workflow started. Out of the box, there are the essential folders for a Jekyll project such as ```_layouts``` and ```_includes```. Add are the ```_posts```, ```_data```, and ```_sass``` folder.

__NOTE:__ Jekyll does support Sass out of the box, so if you'd like to use that instead, simply unistall gulp-sass by running ```npm unistall --save-dev gulp-sass```, delete the gulp task, and __remove the task from the watcher task__. Once that is done, simply [read the Jekyll docs on how to complile Sass with Jekyll](https://jekyllrb.com/docs/assets/).


Enjoy!.

