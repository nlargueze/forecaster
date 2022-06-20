<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import '$lib/styles/main.css';
</script>

<svelte:head>
	<title>Forecaster</title>
</svelte:head>


<template>
    <Header></Header>
    <slot></slot>
</template>
