<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  type Props = HTMLButtonAttributes & {
    action?: "open" | "expand";
    target?: boolean;
  };

  const { target, action = "open", ...props }: Props = $props();

  const ctx = SidebarContext.get();
</script>

<button
  {...props}
  {...ctx.props}
  type="button"
  onclick={(ev) => {
    props.onclick?.(ev);
    if (action === "open") ctx.open = target ?? !ctx.open;
    else ctx.expand = target ?? !ctx.expand;
  }}
>
  {@render props.children?.()}
</button>
