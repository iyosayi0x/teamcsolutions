<script>
	import { services, feats, benefits } from '$lib/data/services';
	import BaseServicePage from '../BaseServicePage.svelte';
</script>

<BaseServicePage
	bannerConfig={services.cyber}
	features={feats.cyber.features}
	benefitsConfig={{ title: benefits.cyber.title }}
	benefits={benefits.cyber.benefits}
/>
