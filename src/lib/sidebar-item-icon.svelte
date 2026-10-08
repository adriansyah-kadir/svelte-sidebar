<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLElement>;

  const props: Props = $props();

  const ctx = SidebarContext.get();
</script>

<div {...props} {...ctx.props} data-slot="sidebar-item-icon">
  {@render props.children?.()}
</div>

<style>
  [data-slot="sidebar-item-icon"] {
    max-height: 100% !important;
    height: 100% !important;
    aspect-ratio: 1 / 1 !important;
    flex-shrink: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
