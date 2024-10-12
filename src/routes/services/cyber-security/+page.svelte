<script>
	import { services, feats } from '$lib/data/services';
	import BaseServicePage from '../BaseServicePage.svelte';
</script>

<BaseServicePage bannerConfig={services.cyber} features={feats.cyber.features} />
