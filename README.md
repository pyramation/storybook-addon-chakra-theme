#### Installation
```bash
yarn add storybook-addon-chakra-theme --dev
```

#### Add to .storybook/addons.js

```javascript
import 'storybook-addon-chakra-theme/dist/register';
```

#### addDecorator to .storybook/config.js
```javascript
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-chakra-theme';

const themes = [theme1, theme2];
addDecorator(withThemesProvider(themes));
```

> or

#### addDecorator to stories

```javascript
import {withThemesProvider} from 'storybook-addon-chakra-theme';

const themes = [theme1, theme2];

storiesOf("demo", module)
  .addDecorator(withThemesProvider(themes))
  .add("demo div", () => <div>DEMO</div>);
```

#### Reminder
Make sure every theme has a `name` property. For example:

```
const myTheme = {
  name: "Light",
  primaryColor: "blue"
}
```

This is used for displaying in the Storybook UI.


#### Contributing

`yarn`

`yarn build`

`yarn example`

#### Thanks and License Reference

https://github.com/echoulen/storybook-addon-styled-component-theme
https://github.com/JumboInteractiveLimited/storybook-addon-emotion-theme
