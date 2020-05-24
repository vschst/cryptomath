export default {
  width: 24,
  height: 24,
  fill: 'white',
  _class: 'flat-icon',
  dom(
    width = this.width,
    height = this.height,
    fill = this.fill,
    _class = this._class
  ) {
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="${fill}" class="${_class}" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-3.865 0-7 3.134-7 7s3.135 7 7 7 7-3.134 7-7-3.135-7-7-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm1.484-4.315l1.516-1.457-2.083-.287-.917-1.892-.917 1.892-2.083.287 1.516 1.457-.369 2.07 1.853-.992 1.854.992-.37-2.07zm1.62-9.822l-2.48-3.329 3.376-4.534h5l-5.896 7.863zm-2.974.137h1.828l-5.958-8h-1.869l5.999 8zm-7.249-8h-1.881l6 8h1.881l-6-8z"/></svg>`
  }
}
