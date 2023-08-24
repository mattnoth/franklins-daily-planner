## `Input` Component

### Description

The `Input` component is a versatile, reusable input field designed to seamlessly integrate with projects and to be easily styled with Tailwind CSS. It provides base styles that can be extended or overridden, allowing for maximum flexibility in various use-cases.

### Props

| Prop               | Type                           | Description                                                                                                     |
|--------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `value`            | `string` \| `number`           | The current value of the input field.                                                                           |
| `onValueChange`    | `(value: string \| number) => void`  | Callback function to handle changes in the input's value.                                                       |
| `additionalClasses`| `string`                       | (Optional) Additional Tailwind CSS classes or other CSS classes to extend or override the base styling.         |
| `...props`         | `InputHTMLAttributes<HTMLInputElement>` | All standard HTML input attributes (like `placeholder`, `type`, `name`, etc.) can be passed to further customize the component. |

### Usage

To use the `Input` component in your project:

```tsx
import { Input } from '[YourComponentLibraryPath]';  // Replace with your actual path

function ExampleComponent() {
  const [text, setText] = React.useState('');

  return (
    <Input
      value={text}
      onValueChange={setText}
      placeholder="Enter some text"
      additionalClasses="bg-gray-100 hover:bg-gray-200"
    />
  );
}
```

### Styling

The `Input` component comes with a base style defined as `border rounded-md px-3 py-2`. Using the `additionalClasses` prop, you can add or override styles using Tailwind CSS or any other styles you want.

For instance, to give the input a light gray background with a darker gray background on hover:

```tsx
<Input additionalClasses="bg-gray-100 hover:bg-gray-200" ... />
```

### Extending

To extend or customize the `Input` component further:

1. **Using HTML Attributes**: Pass in standard HTML input attributes directly. This means you can utilize attributes like `maxLength`, `min`, `max`, and so on, directly without any additional modifications.
2. **Modifying the Source Code**: Expand the component's interface (`IInput`) in the source code to include additional properties as needed. This method provides more flexibility if you're considering adding custom functionalities or properties.
