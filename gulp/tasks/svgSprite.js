import svgSpritePlugin  from "gulp-svg-sprite";


export const svgSprite = () => {
   return app.gulp.src(`${app.path.src.svgicons}`, { encoding: false })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'SVG',
            message: "Error: <%= error.message %>"
         })))
      .pipe(svgSpritePlugin ({
         mode: {
            stack: {
               sprite: `../icons/icons.svg`,
               example: true
            }
         },
      }))
      .pipe(app.gulp.dest(app.path.build.images));
      
}