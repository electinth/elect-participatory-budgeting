export const ChooseProjectSection = () => import('../..\\components\\ChooseProjectSection..vue' /* webpackChunkName: "components/choose-project-section" */).then(c => wrapFunctional(c.default || c))
export const Conclusion = () => import('../..\\components\\Conclusion.vue' /* webpackChunkName: "components/conclusion" */).then(c => wrapFunctional(c.default || c))
export const DistrictDropdown = () => import('../..\\components\\DistrictDropdown.vue' /* webpackChunkName: "components/district-dropdown" */).then(c => wrapFunctional(c.default || c))
export const EndCredit = () => import('../..\\components\\EndCredit.vue' /* webpackChunkName: "components/end-credit" */).then(c => wrapFunctional(c.default || c))
export const EndSection = () => import('../..\\components\\EndSection.vue' /* webpackChunkName: "components/end-section" */).then(c => wrapFunctional(c.default || c))
export const IntroSection = () => import('../..\\components\\IntroSection.vue' /* webpackChunkName: "components/intro-section" */).then(c => wrapFunctional(c.default || c))
export const ProblemSection = () => import('../..\\components\\ProblemSection.vue' /* webpackChunkName: "components/problem-section" */).then(c => wrapFunctional(c.default || c))
export const ProjectSection = () => import('../..\\components\\ProjectSection.vue' /* webpackChunkName: "components/project-section" */).then(c => wrapFunctional(c.default || c))
export const ProvinceSection = () => import('../..\\components\\ProvinceSection.vue' /* webpackChunkName: "components/province-section" */).then(c => wrapFunctional(c.default || c))
export const ScoreSection = () => import('../..\\components\\ScoreSection.vue' /* webpackChunkName: "components/score-section" */).then(c => wrapFunctional(c.default || c))
export const TreeMapSection = () => import('../..\\components\\TreeMapSection.vue' /* webpackChunkName: "components/tree-map-section" */).then(c => wrapFunctional(c.default || c))
export const VideoSection = () => import('../..\\components\\VideoSection.vue' /* webpackChunkName: "components/video-section" */).then(c => wrapFunctional(c.default || c))

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
