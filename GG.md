You are working on my React + Tailwind CSS portfolio website called "Béryl Images".

Before making any changes, analyze my current project architecture and explain your plan.

I want to add a new portfolio feature:

## FEATURE: Photography Gallery Projects

Currently, my portfolio handles projects like this:

* Each project has a thumbnail image displayed in the portfolio grid.
* Each project has a full image displayed inside the project modal.

Example:

```js
{
  thumbnail,
  image
}
```

This works well for:

* flyers
* posters
* graphic design projects

I want to keep this behavior.

However, photography projects should work differently.

Instead of displaying every single photo as a separate portfolio card, I want one portfolio card representing an entire photography session/event.

Example:

"Concert Photography"

The card shows one cover image.

When the user clicks it, a gallery viewer opens showing all captured moments.

---

# Requirements

## 1. Keep the existing architecture

Do NOT rewrite the portfolio system.

Do NOT remove:

* current GSAP animations
* current modal system
* current filters
* current project cards
* current styling

Extend the existing system.

---

# 2. Update the project data structure

Find the file where portfolio projects are stored.

Currently projects contain properties like:

```js
id,
title,
description,
category,
type,
image,
thumbnail,
tools,
link
```

Add a new property:

```js
displayType
```

Possible values:

```js
"display"
```

for normal projects.

```js
"gallery"
```

for photography gallery projects.

---

Normal project example:

```js
{
 displayType: "display",

 thumbnail: projectThumbnail,

 image: projectImage
}
```

---

Gallery project example:

```js
{
 displayType: "gallery",

 image: coverImage,

 gallery: [
   image1,
   image2,
   image3
 ]
}
```

The gallery property should only exist for gallery projects.

---

# 3. Update ProjectCard.jsx

Analyze the current ProjectCard component.

Currently it probably displays:

```jsx
project.thumbnail
```

Modify it so that:

* If thumbnail exists:
  use thumbnail.
* Otherwise:
  use image as the card image.

Example:

```jsx
src={project.thumbnail ?? project.image}
```

Do not change the current design.

Keep:

* hover effects
* animations
* Tailwind classes
* layout

---

# 4. Update the project opening logic

Find where:

```js
setSelectedProject(project)
```

is used.

Currently all projects open the same modal.

Change the logic:

If:

```js
project.displayType === "gallery"
```

open a photography gallery viewer.

Otherwise:

keep the existing project modal.

---

# 5. Create a new component

Create:

```
GalleryModalContent.jsx
```

This component should:

Receive a gallery project.

Example:

```js
project.gallery
```

Features:

* Display the current image.
* Previous button.
* Next button.
* Image counter:

Example:

```
3 / 15
```

* Smooth transitions between images.
* Match the current Béryl Images modal style.

Use GSAP if the current modal system already uses GSAP.

---

# 6. Keep the Béryl Images visual identity

The new gallery must match the existing website:

Style:

* premium
* minimal
* elegant
* Apple-inspired

Colors:

Primary blue:
#264653

Accent orange:
#ff6d00

Background:
#EFF6FB

Use:

* rounded corners
* soft shadows
* clean spacing
* smooth animations

---

# 7. Optimize performance

Important:

Do not unnecessarily load all gallery images immediately.

Keep:

* lazy loading
* optimized images
* clean React rendering

---

# Before modifying anything:

First answer:

1. Which files need to be modified?
2. Why does each file need modification?
3. What will the new data flow look like?

Then implement the changes step by step.

Do not make destructive changes.
Do not duplicate existing components unnecessarily.
