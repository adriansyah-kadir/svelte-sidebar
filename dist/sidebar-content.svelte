<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  const { children, ...props }: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = SidebarContext.get();
</script>

<div {...props} {...ctx.props} data-slot="sidebar-content">
  {@render children?.()}
</div>

<style>
  div {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0; /* lets a flex child shrink below its content so it can scroll */
    overscroll-behavior: contain;

    &[data-orientation="vertical"] {
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
    }

    &[data-orientation="horizontal"] {
      flex-direction: row;
      overflow-x: auto;
      overflow-y: hidden;
    }

    /* no scrollbar eating into the icon rail while shrunk */
    &[data-expand="false"] {
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
