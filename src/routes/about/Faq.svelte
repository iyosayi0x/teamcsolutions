<script lang="ts">
	import { slide } from 'svelte/transition';
	export let faq: {
		question: string;
		answer: string;
	};
	let isAnswerVisible = false;

	const toggleShow = () => {
		isAnswerVisible = !isAnswerVisible;
	};
</script>

<div class="faq">
	<div
		on:click={toggleShow}
		on:keypress={toggleShow}
		tabindex="0"
		role="button"
		class="faq__question-container"
	>
		<div class="faq__question">{faq.question}</div>

		<div class="faq__action">+</div>
	</div>

	{#if isAnswerVisible}
		<div class="faq__answer" transition:slide={{ delay: 250, duration: 300, axis: 'y' }}>
			{faq.answer}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '../../css_lib' as *;

	.faq {
		margin: 1rem 0 2rem 0;
	}

	.faq__question-container {
		@include flexbox(space-between, center);
		font-size: $text-h5;
	}
	.faq__action {
		color: $primary-color;
	}

	.faq__question {
		cursor: pointer;
	}

	.faq__answer {
		margin-top: 1rem;
		color: $grey-color-1;
	}
</style>
