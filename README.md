# Overview

Qodly Custom Component for Displaying Group Avatars

Effortlessly showcase group avatars with the Qodly Avatar Group Component.

![Group Avatar Component](public/groupAvatar.png)

## Key Features

- **Flexible Sizing:** Easily set the width and height of each avatar using the `width` and `height` properties, providing flexibility in avatar dimensions.

- **Margin Configuration:** Control the spacing between avatars with the `marginLeft` and `marginRight` properties, ensuring precise positioning.

- **Border Styling:** Customize the appearance of the avatar borders by adjusting `borderWidth`, `borderColor`, `borderStyle`, and `borderRadius`.

- **Background Options:** Define the background color (`backgroundColor`) when no picture is displayed, ensuring a cohesive look with your application's theme.

- **Text Styling:** Tailor the color (`color`) and font size (`fontSize`) of the text displayed when no picture is available, maintaining visual consistency.

# Getting Started

The Qodly Avatar Group Component offers various properties for fine-tuning the display of group avatars.

## Properties:

| Property          | Type                 | Default   | Description                                               | Example                                        |
| ----------------- | -------------------- | --------- | --------------------------------------------------------- | ---------------------------------------------- |
| `width`           | `string` or `number` | `100px`   | The width of the avatar image.                            | `'30px'`                                       |
| `height`          | `string` or `number` | `100px`   | The height of the avatar image.                           | `'30px'`                                       |
| `marginRight`     | `string`             | `-40px`   | Margin on the right side of each avatar.                  | `'10px'`                                       |
| `marginLeft`      | `string`             | `0px`     | Margin on the left side of each avatar.                   | `'10px'`                                       |
| `borderWidth`     | `string` or `number` | `3px`     | The width of the avatar border.                           | `'2px'`                                        |
| `borderColor`     | `string`             | `white`   | The color of the avatar border.                           | `'#767B87'`, `'rgb(203, 211, 227)'`, `'black'` |
| `borderStyle`     | `string`             | `solid`   | The style of the avatar border.                           | `'solid'`                                      |
| `borderRadius`    | `string`             | `50%`     | The border radius of the avatars.                         | `'50%'`, `'20px'`                              |
| `backgroundColor` | `string`             | `#E6EAF4` | The color of the background when no picture is displayed. | `'#E6EAF4'`, `'rgb(230, 67, 47)'`, `'grey'`    |
| `color`           | `string`             | `#767B87` | The color of text when no picture is displayed.           | `'#767B87'`, `'rgb(203, 211, 227)'`, `'black'` |
| `fontSize`        | `string`             | `24px`    | The font size of the text when no picture is displayed.   | `'0'`                                          |
