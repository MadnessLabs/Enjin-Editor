import { html } from "lit-html";
import markdown from "./readme.md";

const args = {
  placeholder: "Let's write something...",
  userId: "KjlGmrgD8rSADRAECjSVcL3eYR13",
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  placeholder: {
    description: "The placeholder text to show when the editor is empty",
  },
  userId: {
    description: "The ID of the user using the editor",
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: "Components/Editor",
  component: "enjin-editor",
  parameters: {
    notes: { markdown },
  },
};

const Template = ({ placeholder, userId }) => html`
  <enjin-editor
    placeholder="${placeholder}"
    user-id="${userId}"
  </enjin-editor>
`;

export const Default = Template.bind({});

Default.args = { ...args };
Default.argTypes = { ...argTypes };
