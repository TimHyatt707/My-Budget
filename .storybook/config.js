import { configure } from '@storybook/react';
import 'storybook-addon-material-ui';

function loadStories() {
  require('../src/components/NavbarComponent.story.js');
  require('../src/components/BudgetPreviewComponent.story.js');
  require('../src/components/PieChartComponent.story.js');
  require('../src/components/TransactionItemComponent.story.js');
  require('../src/components/TransactionPreviewComponent.story.js');
  require('../src/components/FooterComponent.story.js');
  require('../src/components/IndexPageLayout.story.js');
}

configure(loadStories, module);
