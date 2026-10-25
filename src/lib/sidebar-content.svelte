<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  const { children, ...props }: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = SidebarContext.get();
</script>

<div {...props} {...ctx.props} data-slot="sidebar-content">
  {@render children?.()}
</div>
