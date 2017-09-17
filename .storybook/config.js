import { configure } from '@storybook/react';
import 'storybook-addon-material-ui';

function loadStories() {
  require('../src/components/NavbarComponent.story.js');
  require('../src/components/BudgetPreviewComponent.story.js');
}

configure(loadStories, module);
