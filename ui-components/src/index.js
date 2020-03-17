import Vue from 'vue';
import { Plugin as FragmentPlugin } from 'vue-fragment';

Vue.use(FragmentPlugin);

export { default as Button } from './components/Button.vue';
export { default as Card } from './components/Card.vue';
export { default as ChoiceForm } from './components/ChoiceForm.vue';
export { default as Field } from './components/Field.vue';
export { default as FieldCaption } from './components/FieldCaption.vue';
export { default as Heading } from './components/Heading.vue';
export { default as HelpMenu } from './components/HelpMenu.vue';
export { default as Icon } from './components/Icon.vue';
export { default as Input } from './components/Input.vue';
export { default as PricingCard } from './components/PricingCard.vue';
export { default as PricingTable } from './components/PricingTable.vue';
export { default as ProductConfigurator } from './components/ProductConfigurator.vue';
export { default as ProductRecommendation } from './components/ProductRecommendation.vue';
export { default as ProgressBar } from './components/ProgressBar.vue';
export { default as Select } from './components/Select.vue';
export { default as Video } from './components/Video.vue';
export { default as TidwitVideo } from './components/TidwitVideo.vue';

export { configure } from './config';
export { default as registerComponent } from './registerComponent';
