<template>
	<el-aside class="w-[var(--base-menu-width)] bg-[var(--base-menu-background)]">
		<Logo></Logo>
		<Menu></Menu>
	</el-aside>
</template>

<script setup lang="ts">
import Logo from '../logo/index.vue';
import Menu from '../menu/index.vue';

defineOptions({ name: 'SideNavBar' });
</script>

<style lang="sass" scoped></style>
