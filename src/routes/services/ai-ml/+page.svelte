<script>
	import { services, feats, benefits } from '$lib/data/services';
	import BaseServicePage from '../BaseServicePage.svelte';
</script>

<BaseServicePage
	bannerConfig={services.ai}
	features={feats.ai.features}
	benefitsConfig={{ title: benefits.ai.title }}
	benefits={benefits.ai.benefits}
/>
