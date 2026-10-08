<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    SidebarContext,
    type SidebarMode,
    type SidebarPlacement,
  } from "./context.svelte";
  import { box } from "svelte-utils";

  type Props = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    expand?: boolean;
    mode?: SidebarMode;
    placement?: SidebarPlacement;
    shrinkSize?: string;
    expandSize?: string;
  };

  let {
    mode = "sidebar",
    open = $bindable(mode === "sidebar"),
    expand = $bindable(true),
    placement = "left",
    shrinkSize = "3rem",
    expandSize = "15rem",
    ...props
  }: Props = $props();

  const ctx = new SidebarContext({
    open: box(
      () => open,
      (v) => (open = v),
    ),
    expand: box(
      () => expand,
      (v) => (expand = v),
    ),
    mode: () => mode,
    placement: () => placement,
  });
</script>

<div
  {...props}
  {...ctx.props}
  style:--shrink-size={shrinkSize}
  style:--expand-size={expandSize}
  data-slot="sidebar-root"
>
  {@render props.children?.()}
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;

    &[data-mode="sidebar"] {
      &[data-orientation="vertical"] { flex-direction: row; }
      &[data-orientation="horizontal"] { flex-direction: column; }

      &[data-placement="left"] > :global([data-slot="sidebar-aside"]),
      &[data-placement="top"] > :global([data-slot="sidebar-aside"]) {
        order: -999;
      }
      &[data-placement="right"] > :global([data-slot="sidebar-aside"]),
      &[data-placement="bottom"] > :global([data-slot="sidebar-aside"]) {
        order: 999;
      }
    }

    &[data-mode="overlay"] {
      & > :global([data-slot="sidebar-aside"]) {
        position: absolute;
        z-index: 2;
      }

      & > :global([data-slot="sidebar-backdrop"]) {
        z-index: 1;
      }

      &[data-orientation="vertical"] > :global([data-slot="sidebar-aside"]) {
        height: 100%;
      }

      &[data-orientation="horizontal"] > :global([data-slot="sidebar-aside"]) {
        width: 100%;
      }

      &[data-placement="top"] > :global([data-slot="sidebar-aside"]) {
        top: 0;
        left: 0;
      }

      &[data-placement="bottom"] > :global([data-slot="sidebar-aside"]) {
        bottom: 0;
        left: 0;
      }

      &[data-placement="left"] > :global([data-slot="sidebar-aside"]) {
        top: 0;
        left: 0;
      }

      &[data-placement="right"] > :global([data-slot="sidebar-aside"]) {
        top: 0;
        right: 0;
      }
    }
  }
</style>
