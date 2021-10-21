export { default as ChooseProjectSection } from '../..\\components\\ChooseProjectSection..vue'
export { default as Conclusion } from '../..\\components\\Conclusion.vue'
export { default as DistrictDropdown } from '../..\\components\\DistrictDropdown.vue'
export { default as EndCredit } from '../..\\components\\EndCredit.vue'
export { default as EndSection } from '../..\\components\\EndSection.vue'
export { default as IntroSection } from '../..\\components\\IntroSection.vue'
export { default as ProblemSection } from '../..\\components\\ProblemSection.vue'
export { default as ProjectSection } from '../..\\components\\ProjectSection.vue'
export { default as ProvinceSection } from '../..\\components\\ProvinceSection.vue'
export { default as ScoreSection } from '../..\\components\\ScoreSection.vue'
export { default as TreeMapSection } from '../..\\components\\TreeMapSection.vue'
export { default as VideoSection } from '../..\\components\\VideoSection.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
