import { Color } from '@tiptap/extension-color';
import { mergeAttributes } from '@tiptap/react';

// use this: https://codesandbox.io/s/tiptap-extension-example-9x8fr?file=/src/components/CustomStyle.js

const CustomColor = Color.extend({
  addAttributes() {
    return {
      // Add a class attribute instead of a style attribute
      class: {
        default: null,
        parseHTML: (element: { getAttribute: (arg0: string) => any; }) => element.getAttribute('class'),
        renderHTML: (attributes: { class: any; }) => {
          return {
            class: attributes.class,
          };
        },
      },
      // You can remove the style attribute if you don't need it
      // style: {
      //   default: null,
      //   parseHTML: element => element.style.color,
      //   renderHTML: attributes => {
      //     if (!attributes.color) {
      //       return {};
      //     }
      //     return { style: `color: ${attributes.color}` };
      //   },
      // },
    };
  },

  // Modify the commands to set and unset the class instead of the style
  addCommands() {
    return {
      setColor: (className) => ({ commands }) => {
        return commands.setMark(this.name, { class: className });
      },
      unsetColor: () => ({ commands }) => {
        return commands.unsetMark(this.name);
      },
    };
  },
});

export default CustomColor;
