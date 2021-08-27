import Vue, { PluginObject } from 'vue'
import { LaUIComponent, LaUIComponentSize, LaUIHorizontalAlignment } from './component'

/** Alert Component */
import { LaAlert } from './alert'


/** LatUI component common definition */import { LaXiyouji } from './xiyouji'

export type Component = LaUIComponent

/** Alert Component */
export class Alert extends LaAlert {}

/** Component size definition for button, input, etc */
export type ComponentSize = LaUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = LaUIHorizontalAlignment
/** Xiyouji Component */
export class Xiyouji extends LaXiyouji {}
