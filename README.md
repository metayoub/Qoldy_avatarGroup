# Overview

**Qodly Avatar Group Component**  
Easily display group avatars with the customizable Qodly Avatar Group Component. Perfect for showcasing member profiles in an intuitive and visually appealing way.

![Group Avatar Component](public/groupAvatar.png)

# Getting Started

The Qodly Avatar Group Component offers various properties for fine-tuning the display of group avatars.
Customize everything from the number of visible avatars to fallback initials when an image is unavailable.

## Properties:

| Property       | Type                        | Default | Description                                                                    | Example       |
| -------------- | --------------------------- | ------- | ------------------------------------------------------------------------------ | ------------- |
| `Image`        | `string`                    | ``      | The name of the picture field. Must be of type "picture".                      | `'avatar'`    |
| `Title`        | `string`                    | ``      | The field used to display the first letter as a fallback when no image exists. | `'firstName'` |
| `MaxLength`    | `number`                    | `10`    | The maximum number of visible avatars. Remaining members are grouped.          | `3`           |
| `Qodly Source` | `Selection` or `collection` | ``      | The data source used for the avatars.                                          | `users`       |

### Tips:

- Use drag-and-drop (DnD) to quickly assign fields instead of manually typing property names.
- Combine fields like `Image` and `Title` for a seamless fallback experience.
