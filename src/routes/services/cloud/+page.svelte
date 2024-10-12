<script>
	import { services, feats } from '$lib/data/services';
	import BaseServicePage from '../BaseServicePage.svelte';
</script>

<BaseServicePage bannerConfig={services.cloud} features={feats.cloud.features} />
