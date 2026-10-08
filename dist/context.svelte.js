import { box, Context } from "svelte-utils";
export class SidebarContext extends Context {
    #open;
    get open() { return this.#open.current; }
    set open(value) { this.#open.current = value; }
    #expand;
    get expand() { return this.#expand.current; }
    set expand(value) { this.#expand.current = value; }
    mode;
    placement;
    get orientation() {
        return this.placement === "left"
            || this.placement === "right"
            ? "vertical"
            : "horizontal";
    }
    hasBackdrop = $state(false);
    constructor(opts = {}) {
        super();
        this.mode = $derived.by(opts.mode ?? (() => "sidebar"));
        this.placement = $derived.by(opts.placement ?? (() => "left"));
        this.#open = opts.open ?? box(this.mode === "sidebar");
        this.#expand = opts.expand ?? box(true);
    }
    toggleOpen = () => {
        this.open = !this.open;
    };
    toggleExpand = () => {
        this.expand = !this.expand;
    };
    get props() {
        return {
            "data-open": this.open,
            "data-expand": this.expand,
            "data-mode": this.mode,
            "data-orientation": this.orientation,
            "data-placement": this.placement,
        };
    }
}
