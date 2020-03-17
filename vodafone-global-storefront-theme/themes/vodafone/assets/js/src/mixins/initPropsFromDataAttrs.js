/**
 * Assign HTML data attributes as props on creation.
 */
const initPropsFromDataAttrs = {
  mounted() {
    Object.assign(this, this.$el.dataset);
  }
};

export default initPropsFromDataAttrs;
