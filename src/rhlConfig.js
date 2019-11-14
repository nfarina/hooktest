import { setConfig } from 'react-hot-loader';

// These are the settings I use for my own project; they seem
// to have no effect on whether "Hooks Reset" works.
setConfig({
  logLevel: "debug",
  reloadHooks: false,
  reloadHooksOnBodyChange: false,
});