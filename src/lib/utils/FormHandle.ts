// @ts-nocheck

/**
 * Resets the form by clearing all input values and removing any success or error classes.
 * It also resets the selected index of dropdowns and clears values for select tags.
 */

export function formReset(form: HTMLFormElement) {
  form?.reset();

  const validationTags = form?.querySelectorAll(
    "[input-wrapper]:not(.hidden):not(.message).success, [input-wrapper]:not(.hidden):not(.message).error",
  );

  validationTags?.forEach((tag) => {
    tag.classList.remove("success", "error");
  });

  const selectTags = form?.querySelectorAll(
    "[input-wrapper]:not(.hidden) select[data-hs-select]",
  );

  selectTags?.forEach((tag) => {
    const selectElement = tag as HTMLSelectElement;
    const select = window.HSSelect?.getInstance(tag);
    selectElement.selectedIndex = 0;

    if (select) {
      select.setValue("");
    }
  });
}

/**
 * Validates a select element by adding 'success' or 'error' classes
 * based on whether the selection has a value.
 *
 * @param tag - The HTMLSelectElement to validate.
 */
export const validateSelectTag = (tag: HTMLSelectElement) => {
  const validationTag = tag.closest("[input-wrapper]");

  if (tag.value === "") {
    validationTag?.classList.add("error");
    validationTag?.classList.remove("success");
  } else {
    validationTag?.classList.contains("error") &&
      validationTag?.classList.add("success");
    validationTag?.classList.remove("error");
  }
};

/**
 * Checks if all required fields in a form have values.
 *
 * @param form - The form element to check.
 * @returns true if all required fields have values, false otherwise.
 */
export function isFormFilled(form: HTMLFormElement): boolean {
  const elements = form.querySelectorAll(
    "input[name], [input-wrapper]:not(.hidden) select[data-hs-select], textarea[name]",
  );
  type element = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

  // Check if all required fields have values
  for (let element of elements) {
    const elem = element as element;

    if (elem.tagName === "SELECT" && elem.value === "") {
      return false;
    } else if (elem.hasAttribute("required") && elem.value === "") {
      return false;
    }
  }
  return true;
}

/**
 * Disables/enables the submit button and, for a terminal (non-transient)
 * result, notifies the form via a "contactform:result" event so the
 * template can show its success/error UI.
 *
 * @param message - The message to display on error.
 * @param success - Whether this is a success or error result.
 * @param disableSubmit - Optionally disables the submit button if true.
 * @param form - form element
 * @param notify - Whether to dispatch "contactform:result". Pass false for
 *   transient status updates (e.g. "submitting…") that aren't a final result.
 */
export const setMessage = (
  message: string,
  success: boolean,
  disableSubmit = false,
  form: HTMLFormElement,
  notify = true,
) => {
  const submitButton = form?.querySelector('button[type="submit"]');

  if (disableSubmit) {
    submitButton?.setAttribute("disabled", "true");
  } else {
    submitButton?.removeAttribute("disabled");
  }

  if (notify) {
    form.dispatchEvent(
      new CustomEvent("contactform:result", {
        detail: { success, message },
      }),
    );
  }
};

/**
 * Submits form data to a specified endpoint with timeout and error handling.
 * Uses an alternative form submission if the main submission fails.
 *
 * @param param0 - Object containing the form element and unique string for form submission.
 */
export const formSubmit = async ({
  form,
  action,
}: {
  form: HTMLFormElement;
  action: string;
}) => {
  const data = Object.fromEntries(new FormData(form).entries());

  // Deploybase only falls back to a field literally named "email" for the
  // Reply-To; our visible field is named "Email Address", so set _replyto
  // explicitly from whichever input has type="email".
  const emailInput = form.querySelector<HTMLInputElement>(
    'input[type="email"]',
  );
  if (emailInput?.value) {
    data["_replyto"] = emailInput.value;
  }

  const controller = new AbortController();
  const signal = controller.signal;
  const timeout = 60000;

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  fetch(action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
    signal,
  })
    .then(async (response: any) => {
      // Deploybase answers {"ok": true} on success, an error status otherwise
      const jsonResponse = await response.json().catch(() => ({}));

      if (response.ok && jsonResponse.ok === true) {
        setMessage("default", true, false, form);
        formReset(form);
      } else {
        console.error(
          "Form submission failed:",
          response.status,
          jsonResponse.message,
        );
        setMessage(
          "Oops! There was a problem submitting your form.",
          false,
          false,
          form,
        );
      }
    })
    .catch(async (error) => {
      if (error.name === "AbortError") {
        setMessage(
          "We couldn't reach the server. Please try again later.",
          false,
          false,
          form,
        );
      } else {
        console.error("Form submission failed:", error);
        setMessage(
          "Oops! There was a problem submitting your form.",
          false,
          false,
          form,
        );
      }
    })
    .finally(() => {
      clearTimeout(timer);
    });
};

/**
 * Wires up submit handling for a contact form: select-tag validation,
 * required-field checking, and error messaging on submission failure.
 *
 * @param formId - The id of the form element to wire up.
 */
export function initContactForm(formId = "contact-form") {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById(formId) as HTMLFormElement | null;

    let selectTags = form?.querySelectorAll(
      "[input-wrapper]:not(.hidden) select[data-hs-select]",
    ) as NodeListOf<HTMLSelectElement>;

    function isSelectStatus(items: HTMLSelectElement[]) {
      items.forEach((item) => {
        if (item.value !== "") {
          item.classList.add("hs-select-active");
        } else {
          item.classList.remove("hs-select-active");
        }
      });
    }

    isSelectStatus(Array.from(selectTags));

    selectTags.forEach((tag) => {
      tag.addEventListener("change", () => {
        // Ensure only visible select tag value should submitted
        selectTags.forEach((tag) => {
          const name = tag.getAttribute("data-name");
          tag.setAttribute("name", name || "");
        });

        validateSelectTag(tag);

        isSelectStatus(Array.from(selectTags));
      });
    });

    form?.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const action = form?.getAttribute("data-action") || "";

      selectTags = form?.querySelectorAll(
        "[input-wrapper]:not(.hidden) select[data-hs-select]",
      ) as NodeListOf<HTMLSelectElement>;

      // Validate all preline select tags
      selectTags.forEach(validateSelectTag);

      if (isFormFilled(form)) {
        setMessage("Form Submitting!...", true, true, form, false);

        try {
          await formSubmit({ form, action });
        } catch (error) {
          setMessage(
            error + "! Please email support@parsec.cloud to submit a ticket!",
            false,
            false,
            form,
          );
        }
      }
    });
  });
}

/**
 * Sends a POST request with a specified timeout and aborts if the timeout is exceeded.
 *
 * @param url - The URL to send the request to.
 * @param data - The form data to send.
 * @param controller - An AbortController to manage request timeout.
 * @param timeout - The timeout duration in milliseconds.
 */
export const fetchWithTimeout = async (
  url: string,
  data: Record<string, FormDataEntryValue>,
  controller: AbortController,
  timeout: number,
) => {
  setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
    signal: controller.signal,
  });

  if (response.status !== 200) {
    throw new Error("Request failed with status code " + response.status);
  }
};
