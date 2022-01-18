import Vue from 'vue'

/** LaUI component common definition */
export declare class LaUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type LaUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type LaUIHorizontalAlignment = 'left' | 'center' | 'right'
