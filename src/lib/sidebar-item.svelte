<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLElement>;
  const props: Props = $props();

  const ctx = SidebarContext.get();
</script>

<div {...props} {...ctx.props} data-slot="sidebar-item">
  {@render props.children?.()}
</div>

<style>
  div {
    flex-shrink: 0;
    text-wrap: nowrap;
    min-height: var(--shrink-size);
    min-width: var(--shrink-size);
  }
</style>
