const SELECT_ICON_CLASSES = "shrink-0 size-4";

// Preline reads per-option icons from a `data-hs-select-option` JSON attribute
// on each native <option> (it ignores any markup nested inside <option>).
// This keeps the icon markup/classes centralized here instead of duplicated
// wherever a <select data-hs-select> is rendered.
export const getPrelineSelectOptionAttrs = (iconSrc?: string) => {
  if (!iconSrc) return {};

  return {
    "data-hs-select-option": JSON.stringify({
      icon: `<img src="${iconSrc}" alt="" class="${SELECT_ICON_CLASSES}" />`,
    }),
  };
};

export const getPrelineSelectConfig = ({
  placeholder,
  searchPlaceholder,
  hasSearch = false,
  notFoundText = "No results found",
}: {
  placeholder: string;
  searchPlaceholder?: string;
  hasSearch?: boolean;
  notFoundText?: string;
}) => {
  return {
    hasSearch,
    searchPlaceholder: hasSearch ? searchPlaceholder || "Search..." : "",
    searchClasses:
      "form-input block w-full border-border-base-default before:absolute before:inset-0 before:z-1",
    searchWrapperClasses:
      "bg-white p-1 sticky top-0 dropdown-search-input-wrapper",
    placeholder,
    iconClasses: SELECT_ICON_CLASSES,
    toggleTag: `
    <button type="button" aria-expanded="false">
      <div class="order-1 shrink-0 hidden" data-icon></div>
      <span class="order-1 form-label" data-title></span>

      <!-- Markup shown when no option is selected and the form is submitted (error state) -->
      <div class="ml-auto order-2 hidden hs-success:hidden hs-error:block">
          <svg class="shrink-0 size-3.5 text-inherit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
      </div>

      <!-- Markup shown when an option is selected and the form is submitted (success state) -->
      <div class="ml-auto order-2 hidden hs-success:flex items-center pointer-events-none">
        <svg class="shrink-0 size-4 text-inherit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>

      <!-- Default dropdown indicator icon (only visible when there's no error) -->
      <div class="ml-auto order-2 hs-success:hidden hs-error:hidden">
        <svg class="shrink-0 size-3.5 text-inherit " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
      </div>
    </button>`,
    toggleClasses:
      "form-input items-center hs-select-disabled:pointer-events-none relative ps-4 pe-9 flex gap-2 text-nowrap w-full cursor-pointer bg-surface-base-default border border-border-base-default text-start",
    dropdownClasses:
      "mt-2 max-h-72 space-y-0.5 z-20 w-full bg-surface-base-default border border-border-base-default shadow-md overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
    optionClasses:
      "py-1.5 px-4 w-full hover:rounded-lg text-text-base-label text-label-lg font-medium cursor-pointer hover:bg-surface-base-page-secondary/80 focus:outline-none focus:bg-surface-base-page-secondary",
    optionTemplate:
      '<div class="flex justify-between items-center w-full"><span class="flex items-center gap-2"><div class="shrink-0" data-icon></div><span data-title></span></span><span class="hidden hs-selected:block"><svg class="shrink-0 size-3.5 text-text-brand-default dropdown-selected-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></div>',
    extraMarkup: [],
    disabledOptionClasses: "opacity-50 cursor-not-allowed",
    selectedOptionClasses: "bg-primary text-white",
    searchNoResultText: notFoundText,
    loadingIndicatorMarkup: '<div class="px-4 py-2 text-sm ">Loading...</div>',
  };
};
