import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js"

global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins,
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images, svg } from "./gulp/tasks/images.js";

import { ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
//import { ftp } from "./gulp/tasks/ftp.js"; плагин устарел, надо посмотреть другие


function wathcer() {
   //gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html); //gulp.series(html, ftp) - заменить этим html после запятой, если нужно сразу изменения на серваке и так можно для каждого watch 
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
}
export { svgSprite }

const fonts = gulp.series(ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images, svg)); // убрал copy перед html

const dev = gulp.series(reset, mainTasks, gulp.parallel(wathcer, server),);
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
//const deployFTP = gulp.series(reset, mainTasks, ftp);


export { dev }
export { build }
export { deployZIP }
//export { deployFTP }

gulp.task('default', dev);