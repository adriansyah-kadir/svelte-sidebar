import { box, Context, type Box, type Getter } from "svelte-utils";

export type SidebarMode = "overlay" | "sidebar"

export type SidebarPlacement = "top" | "bottom" | "left" | "right"

export type SidebarOpts = {
  open?: Box<boolean>
  expand?: Box<boolean>
  mode?: Getter<SidebarMode>
  placement?: Getter<SidebarPlacement>
}

export class SidebarContext extends Context {
  #open: Box<boolean>
  get open() { return this.#open.current }
  set open(value: boolean) { this.#open.current = value }

  #expand: Box<boolean>
  get expand() { return this.#expand.current }
  set expand(value: boolean) { this.#expand.current = value }

  readonly mode: SidebarMode
  readonly placement: SidebarPlacement
  get orientation() {
    return this.placement === "left"
      || this.placement === "right"
      ? "vertical"
      : "horizontal"
  }

  hasBackdrop = $state(false)

  constructor(opts: SidebarOpts = {}) {
    super()
    this.mode = $derived.by(opts.mode ?? (() => "sidebar"))
    this.placement = $derived.by(opts.placement ?? (() => "left"))
    this.#open = opts.open ?? box(this.mode === "sidebar")
    this.#expand = opts.expand ?? box(true)
  }

  toggleOpen = () => {
    this.open = !this.open
  }

  toggleExpand = () => {
    this.expand = !this.expand
  }

  get props() {
    return {
      "data-open": this.open,
      "data-expand": this.expand,
      "data-mode": this.mode,
      "data-orientation": this.orientation,
      "data-placement": this.placement,
    }
  }
}
