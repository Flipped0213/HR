export const imagerror = {

  inserted(dom, options) {
    dom.src = dom.src || options.value
    dom.onerror = () => {
      // 当图片出现异常的时候 会将指令配置的默认图片设置为该图片的内容
      // dom可以注册error事件
      dom.src = options.value
    }
  }
}
