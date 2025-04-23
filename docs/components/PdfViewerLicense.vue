<script setup lang="ts">
	import { useLicense } from "@vue-pdf-viewer/viewer";
	import { onBeforeMount } from "vue";

	onBeforeMount(() => {
		useLicense("YOUR_LICENSE_KEY");
	});
</script>
<template><slot /></template>
