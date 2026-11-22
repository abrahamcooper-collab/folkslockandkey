/**
 * Lets any "request service" button preselect a category in the contact form, which may be in a
 * different component tree. Mirrors the template's `folks:preselect-category` window event.
 */
export const PRESELECT_CATEGORY_EVENT = "folks:preselect-category";

export function preselectCategory(category: string): void {
  // Dispatch after the click's hash navigation so the form is already in view.
  requestAnimationFrame(() => {
    window.dispatchEvent(new CustomEvent<string>(PRESELECT_CATEGORY_EVENT, { detail: category }));
  });
}
