type RemoveTwoDashes<T extends string> = T extends `--${infer Rest}` ? Rest : T

type CamelCase<S extends string> =
  S extends `${infer P1}-${infer P2}`
    ? `${P1}${CamelCase<Capitalize<P2>>}`
    : S

type FormatStyleVars<T> = {
  [K in keyof T as  CamelCase<RemoveTwoDashes<K & string>>]?: T[K];
} & T

interface BaseStyleVars {
  '--action-sheet-border-radius'?: string
  '--action-sheet-border-top'?: string
  '--action-sheet-background'?: string
  '--action-sheet-title-color'?: string
  '--action-sheet-title-padding'?: string
  '--action-sheet-title-font-size'?: string
  '--action-sheet-action-item-height'?: string
  '--action-sheet-action-item-padding'?: string
  '--action-sheet-action-item-color'?: string
  '--action-sheet-action-item-disabled-color'?: string
  '--action-sheet-icon-margin'?: string
  '--action-sheet-icon-size'?: string
  '--alert-padding'?: string
  '--alert-border-radius'?: string
  '--alert-icon-size'?: string
  '--alert-icon-margin'?: string
  '--alert-close-icon-size'?: string
  '--alert-close-icon-margin'?: string
  '--alert-standard-info-text-color'?: string
  '--alert-standard-danger-text-color'?: string
  '--alert-standard-success-text-color'?: string
  '--alert-standard-warning-text-color'?: string
  '--alert-danger-background'?: string
  '--alert-success-background'?: string
  '--alert-warning-background'?: string
  '--alert-info-background'?: string
  '--alert-tonal-danger-background'?: string
  '--alert-tonal-success-background'?: string
  '--alert-tonal-warning-background'?: string
  '--alert-tonal-info-background'?: string
  '--alert-tonal-danger-text-color'?: string
  '--alert-tonal-success-text-color'?: string
  '--alert-tonal-warning-text-color'?: string
  '--alert-tonal-info-text-color'?: string
  '--alert-message-font-size'?: string
  '--alert-title-font-size'?: string
  '--alert-title-font-weight'?: string
  '--alert-message-margin-top'?: string
  '--alert-message-line-height'?: string
  '--alert-title-line-height'?: string
  '--app-bar-color'?: string
  '--app-bar-text-color'?: string
  '--app-bar-height'?: string
  '--app-bar-title-padding'?: string
  '--app-bar-title-font-size'?: string
  '--app-bar-left-gap'?: string
  '--app-bar-right-gap'?: string
  '--app-bar-border-radius'?: string
  '--app-bar-font-size'?: string
  '--app-bar-border-bottom'?: string
  '--auto-complete-options-padding'?: string
  '--avatar-text-color'?: string
  '--avatar-border-radius'?: string
  '--avatar-mini-size'?: string
  '--avatar-small-size'?: string
  '--avatar-normal-size'?: string
  '--avatar-large-size'?: string
  '--avatar-border'?: string
  '--avatar-background-color'?: string
  '--avatar-hover-transform'?: string
  '--avatar-group-offset'?: string
  '--back-top-right'?: string
  '--back-top-bottom'?: string
  '--back-top-button-size'?: string
  '--back-top-button-border-radius'?: string
  '--badge-content-padding'?: string
  '--badge-content-border'?: string
  '--badge-content-border-radius'?: string
  '--badge-content-font-size'?: string
  '--badge-icon-size'?: string
  '--badge-default-color'?: string
  '--badge-primary-color'?: string
  '--badge-danger-color'?: string
  '--badge-success-color'?: string
  '--badge-warning-color'?: string
  '--badge-info-color'?: string
  '--badge-default-text-color'?: string
  '--badge-primary-text-color'?: string
  '--badge-danger-text-color'?: string
  '--badge-success-text-color'?: string
  '--badge-warning-text-color'?: string
  '--badge-info-text-color'?: string
  '--badge-dot-width'?: string
  '--badge-dot-height'?: string
  '--bottom-navigation-height'?: string
  '--bottom-navigation-variant-height'?: string
  '--bottom-navigation-z-index'?: string
  '--bottom-navigation-background-color'?: string
  '--bottom-navigation-border-color'?: string
  '--bottom-navigation-fab-offset'?: string
  '--bottom-navigation-item-font-size'?: string
  '--bottom-navigation-item-inactive-color'?: string
  '--bottom-navigation-item-active-color'?: string
  '--bottom-navigation-item-active-background-color'?: string
  '--bottom-navigation-item-line-height'?: string
  '--bottom-navigation-item-icon-size'?: string
  '--bottom-navigation-item-icon-margin-bottom'?: string
  '--bottom-navigation-fab-border-radius'?: string
  '--bottom-navigation-item-variant-icon-container-height'?: string
  '--bottom-navigation-item-variant-icon-container-border-radius'?: string
  '--bottom-navigation-item-variant-icon-container-max-width'?: string
  '--bottom-navigation-item-variant-active-background-color'?: string
  '--bottom-navigation-item-variant-active-color'?: string
  '--breadcrumb-active-color'?: string
  '--breadcrumb-inactive-color'?: string
  '--breadcrumb-separator-margin'?: string
  '--breadcrumb-separator-font-size'?: string
  '--button-default-text-color'?: string
  '--button-primary-text-color'?: string
  '--button-danger-text-color'?: string
  '--button-success-text-color'?: string
  '--button-warning-text-color'?: string
  '--button-info-text-color'?: string
  '--button-default-color'?: string
  '--button-primary-color'?: string
  '--button-danger-color'?: string
  '--button-success-color'?: string
  '--button-warning-color'?: string
  '--button-info-color'?: string
  '--button-default-icon-color'?: string
  '--button-primary-icon-color'?: string
  '--button-danger-icon-color'?: string
  '--button-success-icon-color'?: string
  '--button-warning-icon-color'?: string
  '--button-info-icon-color'?: string
  '--button-default-icon-container-color'?: string
  '--button-primary-icon-container-color'?: string
  '--button-danger-icon-container-color'?: string
  '--button-success-icon-container-color'?: string
  '--button-warning-icon-container-color'?: string
  '--button-info-icon-container-color'?: string
  '--button-disabled-color'?: string
  '--button-disabled-text-color'?: string
  '--button-border-radius'?: string
  '--button-mini-padding'?: string
  '--button-small-padding'?: string
  '--button-normal-padding'?: string
  '--button-large-padding'?: string
  '--button-round-padding'?: string
  '--button-mini-height'?: string
  '--button-small-height'?: string
  '--button-normal-height'?: string
  '--button-large-height'?: string
  '--button-mini-font-size'?: string
  '--button-small-font-size'?: string
  '--button-normal-font-size'?: string
  '--button-large-font-size'?: string
  '--card-background'?: string
  '--card-filled-background'?: string
  '--card-padding'?: string
  '--card-border-radius'?: string
  '--card-outline-color'?: string
  '--card-image-width'?: string
  '--card-row-image-width'?: string
  '--card-image-height'?: string
  '--card-row-image-height'?: string
  '--card-title-color'?: string
  '--card-title-font-size'?: string
  '--card-title-padding'?: string
  '--card-title-margin'?: string
  '--card-title-row-margin'?: string
  '--card-content-padding'?: string
  '--card-content-margin'?: string
  '--card-content-color'?: string
  '--card-content-font-size'?: string
  '--card-content-row-margin'?: string
  '--card-subtitle-color'?: string
  '--card-subtitle-font-size'?: string
  '--card-subtitle-padding'?: string
  '--card-subtitle-margin'?: string
  '--card-subtitle-row-margin'?: string
  '--card-description-color'?: string
  '--card-description-font-size'?: string
  '--card-description-margin'?: string
  '--card-description-padding'?: string
  '--card-footer-padding'?: string
  '--card-footer-margin'?: string
  '--card-footer-right'?: string
  '--card-footer-bottom'?: string
  '--card-line-height'?: string
  '--card-row-line-height'?: string
  '--card-floating-buttons-bottom'?: string
  '--card-floating-buttons-right'?: string
  '--card-floating-buttons-color'?: string
  '--card-close-button-icon-size'?: string
  '--card-close-button-size'?: string
  '--card-close-button-primary-color'?: string
  '--card-close-button-text-color'?: string
  '--card-close-button-border-radius'?: string
  '--cell-color'?: string
  '--cell-font-size'?: string
  '--cell-description-font-size'?: string
  '--cell-description-color'?: string
  '--cell-padding'?: string
  '--cell-min-height'?: string
  '--cell-border-color'?: string
  '--cell-border-left'?: string
  '--cell-border-right'?: string
  '--cell-icon-right'?: string
  '--cell-extra-left'?: string
  '--checkbox-checked-color'?: string
  '--checkbox-unchecked-color'?: string
  '--checkbox-disabled-color'?: string
  '--checkbox-error-color'?: string
  '--checkbox-action-padding'?: string
  '--checkbox-text-color'?: string
  '--checkbox-icon-size'?: string
  '--chip-default-text-color'?: string
  '--chip-primary-text-color'?: string
  '--chip-danger-text-color'?: string
  '--chip-success-text-color'?: string
  '--chip-warning-text-color'?: string
  '--chip-info-text-color'?: string
  '--chip-default-color'?: string
  '--chip-primary-color'?: string
  '--chip-danger-color'?: string
  '--chip-success-color'?: string
  '--chip-warning-color'?: string
  '--chip-info-color'?: string
  '--chip-primary-plain-color'?: string
  '--chip-danger-plain-color'?: string
  '--chip-success-plain-color'?: string
  '--chip-warning-plain-color'?: string
  '--chip-info-plain-color'?: string
  '--chip-border-radius'?: string
  '--chip-normal-height'?: string
  '--chip-large-height'?: string
  '--chip-small-height'?: string
  '--chip-mini-height'?: string
  '--chip-round-radius'?: string
  '--chip-normal-padding'?: string
  '--chip-large-padding'?: string
  '--chip-small-padding'?: string
  '--chip-mini-padding'?: string
  '--chip-text-normal-margin'?: string
  '--chip-text-large-margin'?: string
  '--chip-text-small-margin'?: string
  '--chip-text-mini-margin'?: string
  '--chip-mini-font-size'?: string
  '--chip-small-font-size'?: string
  '--chip-normal-font-size'?: string
  '--chip-large-font-size'?: string
  '--code-line-height'?: string
  '--code-font-size'?: string
  '--collapse-background'?: string
  '--collapse-text-color'?: string
  '--collapse-header-font-size'?: string
  '--collapse-header-padding'?: string
  '--collapse-content-font-size'?: string
  '--collapse-content-padding'?: string
  '--collapse-item-margin-top'?: string
  '--collapse-disable-color'?: string
  '--collapse-border-top'?: string
  '--count-to-text-color'?: string
  '--count-to-text-font-size'?: string
  '--countdown-text-color'?: string
  '--countdown-text-font-size'?: string
  '--counter-padding'?: string
  '--counter-font-color'?: string
  '--counter-background'?: string
  '--counter-input-width'?: string
  '--counter-input-margin'?: string
  '--counter-input-font-size'?: string
  '--counter-button-size'?: string
  '--counter-button-text-color'?: string
  '--counter-button-icon-size'?: string
  '--counter-disabled-color'?: string
  '--counter-disabled-opacity'?: string
  '--counter-error-color'?: string
  '--date-picker-border-radius'?: string
  '--date-picker-font-size'?: string
  '--date-picker-min-width'?: string
  '--date-picker-main-color'?: string
  '--date-picker-title-hint-color'?: string
  '--date-picker-title-hint-font-size'?: string
  '--date-picker-title-height'?: string
  '--date-picker-title-padding'?: string
  '--date-picker-title-background'?: string
  '--date-picker-title-color'?: string
  '--date-picker-title-year-font-size'?: string
  '--date-picker-title-year-font-weight'?: string
  '--date-picker-title-year-margin-bottom'?: string
  '--date-picker-title-year-min-height'?: string
  '--date-picker-title-date-height'?: string
  '--date-picker-title-date-font-size'?: string
  '--date-picker-title-date-font-weight'?: string
  '--date-picker-title-date-range-font-size'?: string
  '--date-picker-title-date-justify-content'?: string
  '--date-picker-header-arrow-filter'?: string
  '--date-picker-body-background-color'?: string
  '--date-picker-body-height'?: string
  '--date-picker-body-padding'?: string
  '--date-picker-header-padding'?: string
  '--date-picker-actions-padding'?: string
  '--date-picker-header-color'?: string
  '--month-picker-padding'?: string
  '--month-picker-item-width'?: string
  '--month-picker-item-height'?: string
  '--month-picker-item-button-max-width'?: string
  '--year-picker-padding'?: string
  '--year-picker-item-width'?: string
  '--year-picker-item-height'?: string
  '--year-picker-item-button-max-width'?: string
  '--day-picker-content-item-width'?: string
  '--day-picker-content-item-min-height'?: string
  '--day-picker-content-item-font-size'?: string
  '--day-picker-content-item-padding'?: string
  '--day-picker-content-item-button-width'?: string
  '--day-picker-content-item-button-height'?: string
  '--day-picker-content-item-button-font-size'?: string
  '--day-picker-head-item-color'?: string
  '--day-picker-head-item-padding'?: string
  '--day-picker-head-item-font-weight'?: string
  '--dialog-width'?: string
  '--dialog-background'?: string
  '--dialog-border-radius'?: string
  '--dialog-title-padding'?: string
  '--dialog-title-font-size'?: string
  '--dialog-message-color'?: string
  '--dialog-message-padding'?: string
  '--dialog-message-line-height'?: string
  '--dialog-message-font-size'?: string
  '--dialog-actions-padding'?: string
  '--dialog-button-margin-left'?: string
  '--dialog-title-color'?: string
  '--dialog-confirm-button-color'?: string
  '--dialog-cancel-button-color'?: string
  '--divider-color'?: string
  '--divider-text-color'?: string
  '--divider-text-margin'?: string
  '--divider-text-padding'?: string
  '--divider-inset'?: string
  '--fab-top'?: string
  '--fab-bottom'?: string
  '--fab-left'?: string
  '--fab-right'?: string
  '--fab-trigger-size'?: string
  '--fab-trigger-border-radius'?: string
  '--fab-trigger-inactive-icon-size'?: string
  '--fab-trigger-active-icon-size'?: string
  '--fab-actions-padding'?: string
  '--fab-action-margin'?: string
  '--fab-action-size'?: string
  '--fab-action-border-radius'?: string
  '--fab-transition-standard-easing'?: string
  '--floating-panel-z-index'?: string
  '--floating-panel-border-top'?: string
  '--floating-panel-border-radius'?: string
  '--floating-panel-background'?: string
  '--floating-panel-header-height'?: string
  '--floating-panel-toolbar-width'?: string
  '--floating-panel-toolbar-height'?: string
  '--floating-panel-toolbar-border-radius'?: string
  '--floating-panel-toolbar-background'?: string
  '--floating-panel-transition-timing-function'?: string
  '--form-details-error-message-color'?: string
  '--form-details-extra-message-color'?: string
  '--form-details-margin-top'?: string
  '--form-details-font-size'?: string
  '--form-details-message-margin-right'?: string
  '--icon-size'?: string
  '--image-preview-swipe-indicators-text-color'?: string
  '--image-preview-swipe-indicators-padding'?: string
  '--image-preview-zoom-container-background'?: string
  '--image-preview-close-icon-top'?: string
  '--image-preview-close-icon-right'?: string
  '--image-preview-close-icon-size'?: string
  '--image-preview-close-icon-color'?: string
  '--image-preview-extra-top'?: string
  '--image-preview-extra-left'?: string
  '--index-bar-list-right'?: string
  '--index-bar-list-top'?: string
  '--index-bar-list-left'?: string
  '--index-bar-list-bottom'?: string
  '--index-bar-list-transform'?: string
  '--index-bar-list-item-font-size'?: string
  '--index-bar-list-item-color'?: string
  '--index-bar-list-item-active-color'?: string
  '--index-bar-list-item-height'?: string
  '--index-bar-list-item-padding'?: string
  '--field-decorator-text-color'?: string
  '--field-decorator-error-color'?: string
  '--field-decorator-blur-color'?: string
  '--field-decorator-focus-color'?: string
  '--field-decorator-placeholder-size'?: string
  '--field-decorator-icon-size'?: string
  '--field-decorator-line-size'?: string
  '--field-decorator-line-focus-size'?: string
  '--field-decorator-line-border-radius'?: string
  '--field-decorator-disabled-color'?: string
  '--field-decorator-standard-normal-margin-top'?: string
  '--field-decorator-standard-normal-margin-bottom'?: string
  '--field-decorator-standard-normal-icon-margin-top'?: string
  '--field-decorator-standard-normal-icon-margin-bottom'?: string
  '--field-decorator-standard-normal-non-hint-margin-top'?: string
  '--field-decorator-standard-small-margin-top'?: string
  '--field-decorator-standard-small-margin-bottom'?: string
  '--field-decorator-standard-small-icon-margin-top'?: string
  '--field-decorator-standard-small-icon-margin-bottom'?: string
  '--field-decorator-standard-small-non-hint-margin-top'?: string
  '--field-decorator-outlined-normal-margin-top'?: string
  '--field-decorator-outlined-normal-margin-bottom'?: string
  '--field-decorator-outlined-normal-padding-left'?: string
  '--field-decorator-outlined-normal-padding-right'?: string
  '--field-decorator-outlined-normal-placeholder-space'?: string
  '--field-decorator-outlined-normal-icon-margin-top'?: string
  '--field-decorator-outlined-normal-icon-margin-bottom'?: string
  '--field-decorator-outlined-small-margin-top'?: string
  '--field-decorator-outlined-small-margin-bottom'?: string
  '--field-decorator-outlined-small-padding-left'?: string
  '--field-decorator-outlined-small-padding-right'?: string
  '--field-decorator-outlined-small-placeholder-space'?: string
  '--field-decorator-outlined-small-icon-margin-top'?: string
  '--field-decorator-outlined-small-icon-margin-bottom'?: string
  '--input-input-height'?: string
  '--input-input-font-size'?: string
  '--input-textarea-height'?: string
  '--link-default-color'?: string
  '--link-primary-color'?: string
  '--link-danger-color'?: string
  '--link-success-color'?: string
  '--link-warning-color'?: string
  '--link-info-color'?: string
  '--link-disabled-color'?: string
  '--link-font-size'?: string
  '--link-focus-opacity'?: string
  '--list-loading-height'?: string
  '--list-finished-height'?: string
  '--list-error-height'?: string
  '--list-loading-color'?: string
  '--list-finished-color'?: string
  '--list-error-color'?: string
  '--list-loading-font-size'?: string
  '--list-finished-font-size'?: string
  '--list-error-font-size'?: string
  '--loading-color'?: string
  '--loading-opacity'?: string
  '--loading-desc-margin'?: string
  '--loading-desc-color'?: string
  '--loading-bar-color'?: string
  '--loading-bar-error-color'?: string
  '--loading-bar-height'?: string
  '--menu-background-color'?: string
  '--menu-border-radius'?: string
  '--menu-select-menu-max-height'?: string
  '--menu-select-menu-padding'?: string
  '--menu-select-menu-border-radius'?: string
  '--menu-select-menu-background-color'?: string
  '--menu-option-normal-height'?: string
  '--menu-option-small-height'?: string
  '--menu-option-mini-height'?: string
  '--menu-option-large-height'?: string
  '--menu-option-padding'?: string
  '--menu-option-normal-font-size'?: string
  '--menu-option-small-font-size'?: string
  '--menu-option-mini-font-size'?: string
  '--menu-option-large-font-size'?: string
  '--menu-option-selected-background'?: string
  '--menu-option-text-color'?: string
  '--menu-option-disabled-color'?: string
  '--overlay-background-color'?: string
  '--pagination-text-color'?: string
  '--pagination-font-size'?: string
  '--pagination-active-color'?: string
  '--pagination-active-bg-color'?: string
  '--pagination-hover-bg-color'?: string
  '--pagination-total-margin'?: string
  '--pagination-total-line-height'?: string
  '--pagination-item-width'?: string
  '--pagination-item-height'?: string
  '--pagination-item-margin'?: string
  '--pagination-item-border-radius'?: string
  '--pagination-input-width'?: string
  '--pagination-disabled-color'?: string
  '--pagination-bg-disabled-color'?: string
  '--pagination-size-line-height'?: string
  '--pagination-size-padding'?: string
  '--paper-background'?: string
  '--paper-border-radius'?: string
  '--picker-background'?: string
  '--picker-toolbar-height'?: string
  '--picker-confirm-button-text-color'?: string
  '--picker-cancel-button-text-color'?: string
  '--picker-picked-border'?: string
  '--picker-title-font-size'?: string
  '--picker-title-text-color'?: string
  '--picker-option-font-size'?: string
  '--picker-option-text-color'?: string
  '--picker-toolbar-padding'?: string
  '--picker-mask-background-image'?: string
  '--popup-overlay-background-color'?: string
  '--popup-content-background-color'?: string
  '--progress-font-size'?: string
  '--progress-track-color'?: string
  '--progress-label-color'?: string
  '--progress-background'?: string
  '--progress-default-color'?: string
  '--progress-primary-color'?: string
  '--progress-danger-color'?: string
  '--progress-success-color'?: string
  '--progress-warning-color'?: string
  '--progress-info-color'?: string
  '--progress-linear-border-radius'?: string
  '--pull-refresh-size'?: string
  '--pull-refresh-background'?: string
  '--pull-refresh-color'?: string
  '--pull-refresh-success-color'?: string
  '--pull-refresh-icon-size'?: string
  '--radio-checked-color'?: string
  '--radio-unchecked-color'?: string
  '--radio-disabled-color'?: string
  '--radio-error-color'?: string
  '--radio-action-padding'?: string
  '--radio-icon-size'?: string
  '--radio-text-color'?: string
  '--rate-color'?: string
  '--rate-size'?: string
  '--rate-primary-color'?: string
  '--rate-disabled-color'?: string
  '--rate-error-color'?: string
  '--rate-action-padding'?: string
  '--result-background'?: string
  '--result-info-color'?: string
  '--result-info-border-color'?: string
  '--result-success-color'?: string
  '--result-success-border-color'?: string
  '--result-error-color'?: string
  '--result-error-border-color'?: string
  '--result-warning-color'?: string
  '--result-warning-border-color'?: string
  '--result-question-color'?: string
  '--result-question-border-color'?: string
  '--result-empty-color'?: string
  '--result-empty-border-color'?: string
  '--result-padding'?: string
  '--result-border-radius'?: string
  '--result-title-color'?: string
  '--result-title-font-size'?: string
  '--result-title-margin'?: string
  '--result-image-size'?: string
  '--result-title-font-weight'?: string
  '--result-description-margin'?: string
  '--result-description-font-size'?: string
  '--result-description-color'?: string
  '--result-description-line-height'?: string
  '--ripple-cubic-bezier'?: string
  '--ripple-color'?: string
  '--select-scroller-background'?: string
  '--select-scroller-padding'?: string
  '--select-scroller-max-height'?: string
  '--select-scroller-border-radius'?: string
  '--select-label-font-size'?: string
  '--select-chip-margin'?: string
  '--select-arrow-size'?: string
  '--select-standard-menu-margin'?: string
  '--option-height'?: string
  '--option-padding'?: string
  '--option-font-size'?: string
  '--option-selected-background'?: string
  '--option-text-color'?: string
  '--skeleton-content-padding'?: string
  '--skeleton-card-height'?: string
  '--skeleton-card-border-radius'?: string
  '--skeleton-card-margin-bottom'?: string
  '--skeleton-card-background-color'?: string
  '--skeleton-animation-background'?: string
  '--skeleton-avatar-size'?: string
  '--skeleton-avatar-border-radius'?: string
  '--skeleton-avatar-margin-right'?: string
  '--skeleton-avatar-background-color'?: string
  '--skeleton-title-width'?: string
  '--skeleton-title-border-radius'?: string
  '--skeleton-title-background-color'?: string
  '--skeleton-row-height'?: string
  '--skeleton-row-border-radius'?: string
  '--skeleton-row-margin-top'?: string
  '--slider-error-color'?: string
  '--slider-track-background'?: string
  '--slider-track-height'?: string
  '--slider-track-border-radius'?: string
  '--slider-track-fill-border-radius'?: string
  '--slider-track-fill-background'?: string
  '--slider-thumb-block-background'?: string
  '--slider-thumb-ripple-background'?: string
  '--slider-thumb-label-background'?: string
  '--slider-thumb-label-font-size'?: string
  '--slider-thumb-label-text-color'?: string
  '--slider-thumb-size'?: string
  '--slider-disabled-opacity'?: string
  '--snackbar-width'?: string
  '--snackbar-color'?: string
  '--snackbar-border-radius'?: string
  '--snackbar-background'?: string
  '--snackbar-font-size'?: string
  '--snackbar-margin'?: string
  '--snackbar-border-color'?: string
  '--snackbar-success-background'?: string
  '--snackbar-info-background'?: string
  '--snackbar-error-background'?: string
  '--snackbar-warning-background'?: string
  '--snackbar-content-padding'?: string
  '--snackbar-action-margin'?: string
  '--snackbar-icon-margin'?: string
  '--snackbar-vertical-action-margin'?: string
  '--space-size-mini-y'?: string
  '--space-size-mini-x'?: string
  '--space-size-small-y'?: string
  '--space-size-small-x'?: string
  '--space-size-normal-y'?: string
  '--space-size-normal-x'?: string
  '--space-size-large-y'?: string
  '--space-size-large-x'?: string
  '--step-tag-size'?: string
  '--step-tag-background'?: string
  '--step-tag-font-size'?: string
  '--step-tag-color'?: string
  '--step-tag-active-color'?: string
  '--step-tag-margin'?: string
  '--step-tag-icon-size'?: string
  '--step-content-font-size'?: string
  '--step-content-color'?: string
  '--step-content-active-color'?: string
  '--step-line-background'?: string
  '--step-line-gap'?: string
  '--step-vertical-tag-margin'?: string
  '--step-vertical-min-height'?: string
  '--swipe-indicator-color'?: string
  '--swipe-indicators-offset'?: string
  '--swipe-indicator-offset'?: string
  '--swipe-navigation-z-index'?: string
  '--swipe-navigation-button-width'?: string
  '--swipe-navigation-button-height'?: string
  '--swipe-navigation-button-border-radius'?: string
  '--swipe-navigation-icon-size'?: string
  '--swipe-navigation-prev-left'?: string
  '--swipe-navigation-next-right'?: string
  '--swipe-navigation-prev-top'?: string
  '--swipe-navigation-next-bottom'?: string
  '--switch-track-background'?: string
  '--switch-track-active-background'?: string
  '--switch-track-error-background'?: string
  '--switch-ripple-color'?: string
  '--switch-handle-background'?: string
  '--switch-handle-color'?: string
  '--switch-handle-active-color'?: string
  '--switch-handle-active-background'?: string
  '--switch-handle-error-background'?: string
  '--switch-disabled-opacity'?: string
  '--switch-variant-width'?: string
  '--switch-variant-height'?: string
  '--switch-variant-track-border-color'?: string
  '--switch-variant-track-background'?: string
  '--switch-variant-handle-width'?: string
  '--switch-variant-handle-height'?: string
  '--switch-variant-handle-color'?: string
  '--switch-variant-handle-active-color'?: string
  '--switch-variant-handle-background'?: string
  '--switch-variant-handle-active-background'?: string
  '--switch-width'?: string
  '--switch-height'?: string
  '--switch-track-width'?: string
  '--switch-track-height'?: string
  '--switch-track-border-radius'?: string
  '--switch-handle-width'?: string
  '--switch-handle-height'?: string
  '--switch-ripple-size'?: string
  '--switch-ripple-left'?: string
  '--switch-ripple-active-left'?: string
  '--switch-loading-size'?: string
  '--switch-variant-ripple-left'?: string
  '--switch-variant-ripple-active-left'?: string
  '--table-background'?: string
  '--table-border-radius'?: string
  '--table-thead-border-bottom'?: string
  '--table-thead-th-text-color'?: string
  '--table-thead-th-text-align'?: string
  '--table-thead-th-font-size'?: string
  '--table-thead-tr-border-bottom'?: string
  '--table-tbody-tr-hover-background'?: string
  '--table-tbody-tr-border-bottom'?: string
  '--table-tbody-td-text-color'?: string
  '--table-tbody-td-font-size'?: string
  '--table-tbody-td-text-align'?: string
  '--table-row-height'?: string
  '--table-row-padding'?: string
  '--table-footer-border-top'?: string
  '--tabs-item-horizontal-height'?: string
  '--tabs-item-vertical-height'?: string
  '--tabs-radius'?: string
  '--tabs-padding'?: string
  '--tabs-indicator-size'?: string
  '--tabs-indicator-border-radius'?: string
  '--tabs-indicator-background'?: string
  '--tabs-background'?: string
  '--tabs-indicator-inner-size'?: string
  '--tab-padding'?: string
  '--tab-active-color'?: string
  '--tab-inactive-color'?: string
  '--tab-disabled-color'?: string
  '--tab-font-size'?: string
  '--tab-font-weight'?: string
  '--tab-active-font-size'?: string
  '--tab-active-font-weight'?: string
  '--font-size-xs'?: string
  '--font-size-sm'?: string
  '--font-size-md'?: string
  '--font-size-lg'?: string
  '--icon-size-xs'?: string
  '--icon-size-sm'?: string
  '--icon-size-md'?: string
  '--icon-size-lg'?: string
  '--hsl-body'?: string
  '--color-body'?: string
  '--hsl-text'?: string
  '--color-text'?: string
  '--hsl-primary'?: string
  '--color-primary'?: string
  '--hsl-info'?: string
  '--color-info'?: string
  '--hsl-success'?: string
  '--color-success'?: string
  '--hsl-warning'?: string
  '--color-warning'?: string
  '--hsl-danger'?: string
  '--color-danger'?: string
  '--hsl-disabled'?: string
  '--color-disabled'?: string
  '--hsl-text-disabled'?: string
  '--color-text-disabled'?: string
  '--hsl-on-primary'?: string
  '--color-on-primary'?: string
  '--hsl-on-info'?: string
  '--color-on-info'?: string
  '--hsl-on-success'?: string
  '--color-on-success'?: string
  '--hsl-on-warning'?: string
  '--color-on-warning'?: string
  '--hsl-on-danger'?: string
  '--color-on-danger'?: string
  '--hsl-primary-container'?: string
  '--color-primary-container'?: string
  '--hsl-info-container'?: string
  '--color-info-container'?: string
  '--hsl-success-container'?: string
  '--color-success-container'?: string
  '--hsl-warning-container'?: string
  '--color-warning-container'?: string
  '--hsl-danger-container'?: string
  '--color-danger-container'?: string
  '--hsl-on-primary-container'?: string
  '--color-on-primary-container'?: string
  '--hsl-on-info-container'?: string
  '--color-on-info-container'?: string
  '--hsl-on-success-container'?: string
  '--color-on-success-container'?: string
  '--hsl-on-warning-container'?: string
  '--color-on-warning-container'?: string
  '--hsl-on-danger-container'?: string
  '--color-on-danger-container'?: string
  '--hsl-surface-container'?: string
  '--color-surface-container'?: string
  '--hsl-surface-container-low'?: string
  '--color-surface-container-low'?: string
  '--hsl-surface-container-high'?: string
  '--color-surface-container-high'?: string
  '--hsl-surface-container-highest'?: string
  '--color-surface-container-highest'?: string
  '--hsl-inverse-surface'?: string
  '--color-inverse-surface'?: string
  '--hsl-outline'?: string
  '--color-outline'?: string
  '--hsl-on-surface-variant'?: string
  '--color-on-surface-variant'?: string
  '--opacity-disabled'?: string
  '--opacity-hover'?: string
  '--opacity-focus'?: string
  '--cubic-bezier'?: string
  '--shadow-key-umbra-opacity'?: string
  '--shadow-key-penumbra-opacity'?: string
  '--shadow-key-ambient-opacity'?: string
  '--time-picker-border-radius'?: string
  '--time-picker-font-size'?: string
  '--time-picker-min-width'?: string
  '--time-picker-title-height'?: string
  '--time-picker-title-padding'?: string
  '--time-picker-title-margin-bottom'?: string
  '--time-picker-title-color'?: string
  '--time-picker-title-background'?: string
  '--time-picker-title-hint-color'?: string
  '--time-picker-title-hint-font-size'?: string
  '--time-picker-title-hint-min-height'?: string
  '--time-picker-title-inactive-opacity'?: string
  '--time-picker-title-time-font-size'?: string
  '--time-picker-title-time-margin'?: string
  '--time-picker-title-time-border-radius'?: string
  '--time-picker-title-time-padding'?: string
  '--time-picker-title-time-background'?: string
  '--time-picker-title-time-active-background'?: string
  '--time-picker-title-time-container-justify-content'?: string
  '--time-picker-title-ampm-button-active-background'?: string
  '--time-picker-title-ampm-margin-left'?: string
  '--time-picker-title-ampm-border-radius'?: string
  '--time-picker-title-ampm-border'?: string
  '--time-picker-title-ampm-button-padding'?: string
  '--time-picker-clock-left'?: string
  '--time-picker-clock-right'?: string
  '--time-picker-clock-top'?: string
  '--time-picker-clock-bottom'?: string
  '--time-picker-clock-container-width'?: string
  '--time-picker-clock-container-height'?: string
  '--time-picker-clock-container-background'?: string
  '--time-picker-clock-hand-height'?: string
  '--time-picker-clock-hand-width'?: string
  '--time-picker-clock-hand-bottom'?: string
  '--time-picker-clock-hand-left'?: string
  '--time-picker-clock-hand-background'?: string
  '--time-picker-clock-hand-border-color'?: string
  '--time-picker-clock-hand-before-width'?: string
  '--time-picker-clock-hand-before-height'?: string
  '--time-picker-clock-hand-before-border-width'?: string
  '--time-picker-clock-hand-after-width'?: string
  '--time-picker-clock-hand-after-height'?: string
  '--time-picker-clock-item-height'?: string
  '--time-picker-clock-item-width'?: string
  '--time-picker-clock-item-active-background'?: string
  '--time-picker-clock-item-active-color'?: string
  '--time-picker-clock-item-disable-color'?: string
  '--time-picker-clock-item-disable-background'?: string
  '--time-picker-clock-item-text-color'?: string
  '--time-picker-inner-left'?: string
  '--time-picker-inner-right'?: string
  '--time-picker-inner-top'?: string
  '--time-picker-inner-bottom'?: string
  '--time-picker-body-background'?: string
  '--time-picker-body-height'?: string
  '--time-picker-actions-padding'?: string
  '--tooltip-opacity'?: string
  '--tooltip-border-radius'?: string
  '--tooltip-font-size'?: string
  '--tooltip-padding'?: string
  '--tooltip-offset'?: string
  '--tooltip-default-color'?: string
  '--tooltip-primary-color'?: string
  '--tooltip-info-color'?: string
  '--tooltip-success-color'?: string
  '--tooltip-warning-color'?: string
  '--tooltip-danger-color'?: string
  '--tooltip-default-text-color'?: string
  '--tooltip-primary-text-color'?: string
  '--tooltip-info-text-color'?: string
  '--tooltip-success-text-color'?: string
  '--tooltip-warning-text-color'?: string
  '--tooltip-danger-text-color'?: string
  '--uploader-action-background'?: string
  '--uploader-action-icon-color'?: string
  '--uploader-action-icon-size'?: string
  '--uploader-action-margin'?: string
  '--uploader-file-size'?: string
  '--uploader-file-margin'?: string
  '--uploader-file-name-background'?: string
  '--uploader-file-name-color'?: string
  '--uploader-file-name-font-size'?: string
  '--uploader-file-name-padding'?: string
  '--uploader-file-border-radius'?: string
  '--uploader-file-text-align'?: string
  '--uploader-file-close-background'?: string
  '--uploader-file-close-size'?: string
  '--uploader-file-close-icon-font-size'?: string
  '--uploader-file-close-icon-color'?: string
  '--uploader-file-cover-fit'?: string
  '--uploader-file-cover-background'?: string
  '--uploader-preview-video-width'?: string
  '--uploader-preview-video-height'?: string
  '--uploader-file-indicator-height'?: string
  '--uploader-file-indicator-normal-color'?: string
  '--uploader-file-indicator-success-color'?: string
  '--uploader-file-indicator-error-color'?: string
  '--uploader-file-progress-color'?: string
  '--uploader-disabled-color'?: string
  '--uploader-disabled-text-color'?: string
  '--uploader-loading-background'?: string
  '--watermark-content-color'?: string
  [key: PropertyKey]: string
}

export interface StyleVars extends FormatStyleVars<BaseStyleVars> {}