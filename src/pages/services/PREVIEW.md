# Refactor Modal System

I want to refactor my modal system to make it reusable, maintainable, and consistent across the entire project.

## Current situation

Right now I have two different modal components:

* `PortfolioModal`
* `ServiceModal`

Both implement almost the same behaviors (opening, closing, animations, overlay, ESC key, body scroll lock, etc.), but they are duplicated and have started to diverge.

My goal is to create **one generic modal component** that can be reused anywhere in the project.

---

## Desired architecture

Please reorganize the modal system into something like:

```text
components/
    ui/
        Modal.jsx

    portfolio/
        PortfolioModalContent.jsx

    services/
        ServiceModalContent.jsx

hooks/
    useModal.js
    useModalAnimation.js
```

The exact folder names can be adjusted if needed, but the separation of responsibilities is important.

---

## Responsibilities

### Modal.jsx

This component should only handle the generic modal behavior.

It should be responsible for:

* opening and closing
* overlay
* click outside to close
* Escape key handling
* body scroll locking
* GSAP animation (using my existing `useModalAnimation` hook)
* close button
* rendering children
* optional props such as `maxWidth`

It should **NOT** know anything about:

* portfolio
* services
* projects
* images
* titles
* business-specific data

It should simply receive something like:

```jsx
<Modal
    isOpen={isOpen}
    onClose={handleClose}
>
    {children}
</Modal>
```

---

### PortfolioModalContent

This component should only render the portfolio content.

For example:

* image
* title
* tools
* type
* external link
* any portfolio-specific UI

It should not contain any modal logic.

---

### ServiceModalContent

Same idea.

It should only render service-specific content.

No modal logic.

---

### useModal hook

Create a reusable `useModal` hook responsible for modal state.

It should expose something similar to:

* isOpen
* openModal()
* closeModal()
* toggleModal()

The hook should remain generic so it can be reused by any future modal.

---

## Design changes

I also want to simplify the overlay.

Please remove the fullscreen backdrop blur.

Instead of:

* heavy `backdrop-blur-md`
* `backdrop-blur-xl`

use a simple semi-transparent dark overlay, for example:

```css
bg-black/50
```

or another equivalent value that fits the existing design.

The goal is to:

* improve performance
* reduce GPU usage
* keep the background visible
* make the UI feel cleaner and more premium

If blur is still used, it should only appear on small UI elements (for example the close button or badges), not on the entire screen.

---

## Important

Please preserve all the current functionality and animations while improving the architecture.

The objective is to eliminate duplicated modal logic and create a reusable UI component that can be shared by both the Portfolio and Services sections, and easily reused for future modals as well.
