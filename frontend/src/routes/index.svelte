<script context="module" lang="ts">
    import { ApiClient, type Portfolio } from "$lib/apis/api_client";
    import { vars } from "$lib/vars";

    /** @type {import('./__types/[slug]').Load} */
    export async function load() {
        const apiClient = new ApiClient(vars.apiUrl);
        let portfolios: Portfolio[];
        try {
            portfolios = await apiClient.portfolios.get_all();
        } catch (err) {
            portfolios = [];
        }
      return {props: {portfolios}}
    }
  </script>

<script lang="ts">
    /**
     * User portfolios
     */
    export let portfolios: Portfolio[];

    /**
     * Selected portfolio
     */
    let portfolio = portfolios.length > 0 ? portfolios[0]: null;

</script>

<main class="main">
    <aside class="sidenav">
        <section class="portfolios">
            <div class="header">Portfolios</div>
            <div class="list">
                {#each portfolios as p}
                    <div class="line">{p.name}</div>
                {/each}
            </div>
        </section>
        
        <div class="header">Models</div>
    </aside>
    <div class="page">
        <section>
            {portfolio?.name}
            <!-- <div class="header">{}</div> -->
        </section>
        <section>
            <div class="header">Charts</div>
        </section>
        <section>
            <div class="header">Assets</div>
        </section>
    </div>
</main>

<style lang="scss">
    .main {
        display: flex;
        flex-direction: row;
    }

    .sidenav {
        min-width: 140px;
        border-right: 1px solid grey;
        padding: 24px;

        .header {
            font-weight: 600;
            padding: 12px 0px;
        }

        .portfolios {
            .list {
                padding: 12px 0px;
                font-size: 0.8em;
                color: #888;
            }
        }
    }

    .page {
        padding: 24px;

        .header {
            font-weight: 600;   
        }
    }
</style>
