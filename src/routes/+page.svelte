<script lang="ts">
  import SidebarMain from "#lib/sidebar-main.svelte";
  import SidebarProvider from "#lib/sidebar.svelte";
  import SidebarAside from "#lib/sidebar-aside.svelte";
  import {
    type SidebarMode,
    type SidebarPlacement,
  } from "#lib/context.svelte.ts";
  import SidebarItem from "#lib/sidebar-item.svelte";
  import SidebarToggle from "#lib/sidebar-toggle.svelte";
  import SidebarBackdrop from "#lib/sidebar-backdrop.svelte";
  import SidebarContent from "#lib/sidebar-content.svelte";

  let params = $state<{
    placement?: SidebarPlacement;
    mode?: SidebarMode;
    open: boolean;
    expand: boolean;
  }>({ open: true, expand: true });
</script>

<SidebarProvider
  {...params}
  expandSize="300px"
  shrinkSize="50px"
  bind:open={params.open}
  bind:expand={params.expand}
>
  <SidebarBackdrop />
  <SidebarMain>
    <label>
      Placement
      <select bind:value={params.placement}>
        {#each ["left", "bottom", "top", "right"] as place}
          <option value={place}>{place}</option>
        {/each}
      </select>
    </label>
    <label>
      Mode
      <select bind:value={params.mode}>
        {#each ["sidebar", "overlay"] as place}
          <option value={place}>{place}</option>
        {/each}
      </select>
    </label>
    <SidebarToggle>toggle open</SidebarToggle>
    <SidebarToggle action="expand">toggle expand</SidebarToggle>
  </SidebarMain>
  <SidebarAside>
    <div data-slot="ok"></div>
    <SidebarToggle data-slot="sidebar-item">Toggle</SidebarToggle>
    <SidebarContent>
      {#each Array(50).fill(1) as _, i}
        <SidebarItem>
          Konyol {i}
        </SidebarItem>
      {/each}
    </SidebarContent>
    <SidebarItem>Kontyol akhir</SidebarItem>
    <SidebarContent>
      {#each Array(50).fill(1) as _, i}
        <SidebarItem>
          Main {i}
        </SidebarItem>
      {/each}
    </SidebarContent>
  </SidebarAside>
</SidebarProvider>

<style>
  :global(*) {
    transition:
      all 300ms ease,
      height 300ms ease;
    scrollbar-width: thin;
    interpolate-size: allow-keywords;
    box-sizing: content-box;
  }

  :global([data-slot="sidebar-root"]) {
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
  }

  /* :global([data-slot="sidebar-aside-wrapper"]) { */
    /* border: 1px solid black; */
    /* background-color: white; */
    /* padding: 10px; */
  /* } */

  :global(body) {
    margin: 0;
  }

  /* :global([data-slot="sidebar-item"]) { */
    /* border: 1px solid; */
    /* height: var(--shrink-size); */
  /* } */

  /* :global([data-slot="sidebar-item"][data-axis="x"]) { */
    /* margin-bottom: 5px; */
  /* } */

  /* :global([data-slot="sidebar-item"][data-axis="y"]) { */
    /* margin-right: 5px; */
  /* } */
</style>
