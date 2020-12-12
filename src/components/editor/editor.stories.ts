import { html } from "lit-html";
import markdown from "./readme.md";
import {
  eventHandles,
  action,
} from "../../../.storybook/helpers/custom-action";

const costumEvents = ["clicked", "enjinChange"];
const events = ["mouseover", "click", ...eventHandles(costumEvents)];

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
    actions: {
      handles: events,
    },
  },
};

const Template = ({ placeholder, userId }) => html`
  <enjin-editor
    placeholder="${placeholder}"
    user-id="${userId}"
  </enjin-editor>
  ${action("enjin-editor", costumEvents)}
`;

export const Default = Template.bind({});

Default.args = { ...args };
Default.argTypes = { ...argTypes };
