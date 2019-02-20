import jQuery from 'jquery'
import 'cropper'

export default {
  deep: true,

  bind () {},

  update (options) {
    // Destroy in case it has been initialized already.
    jQuery(this.el).cropper('destroy')
    // Initializing directly after destroying
    // didn't work. Wrapping it in a setTimeout
    // seems to do the trick.
    setTimeout(() => {
      jQuery(this.el).cropper(options)
    }, 0)
  },

  unbind () {
    jQuery(this.el).cropper('destroy')
  }
}
