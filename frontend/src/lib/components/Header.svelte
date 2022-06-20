<script lang="ts">
    // import { UserCircleIcon} from 'svelte-heroicons-component'
</script>

<div class="header">
    <div class="header-left">
        <div class="logo">Forecaster</div>
    </div>
    <nav class="header-right">
        <div>About</div>
        <div>Pricing</div>
        <div>Docs</div>
        <div>Support</div>
        <!-- <div class="account"><UserCircleIcon></UserCircleIcon></div> -->
    </nav>
</div>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header-left {
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .header-right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }
</style>