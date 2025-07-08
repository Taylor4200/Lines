<script lang="ts">
	import { Sprite } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
</script>

<Sprite
	key="cyberFutureBackground"
	anchor={0.5}
	x={context.stateLayoutDerived.canvasSizes().width * 0.5}
	y={context.stateLayoutDerived.canvasSizes().height * 0.5}
	width={context.stateLayoutDerived.canvasSizes().width}
	height={context.stateLayoutDerived.canvasSizes().height}
	zIndex={-2}
/>
