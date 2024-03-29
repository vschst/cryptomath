export default {
  width: 14,
  height: 14,
  fill: "#E00751",
  _class: "flat-icon",
  dom(
    width = this.width,
    height = this.height,
    fill = this.fill,
    _class = this._class
  ) {
    return `<svg width="${width}" height="${height}" viewBox="0 0 14 14" fill="none" class="${_class}" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z" fill="${fill}"/><path d="M8.45 7.036L10.414 9L9 10.414L7.036 8.45L5.07 10.414L3.657 9L5.621 7.036L3.5 4.914L4.914 3.5L7.036 5.621L9.156 3.5L10.571 4.914L8.45 7.036Z" fill="white"/></svg>`
  },
}
