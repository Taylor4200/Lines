import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 120;

export const REEL_PADDING = .53;

// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{
			name: 'L2',
		},
		{
			name: 'L1',
		},
		{
			name: 'L4',
		},
		{
			name: 'H2',
		},
		{
			name: 'L1',
		},
	],
	[
		{
			name: 'H1',
		},
		{
			name: 'L5',
		},
		{
			name: 'L2',
		},
		{
			name: 'H3',
		},
		{
			name: 'L4',
		},
	],
	[
		{
			name: 'L3',
		},
		{
			name: 'L5',
		},
		{
			name: 'L3',
		},
		{
			name: 'H4',
		},
		{
			name: 'L4',
		},
	],
	[
		{
			name: 'H4',
		},
		{
			name: 'H3',
		},
		{
			name: 'L4',
		},
		{
			name: 'L5',
		},
		{
			name: 'L1',
		},
	],
	[
		{
			name: 'H3',
		},
		{
			name: 'L3',
		},
		{
			name: 'L3',
		},
		{
			name: 'H1',
		},
		{
			name: 'H1',
		},
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4', 'H5'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const HIGH_SYMBOL_SIZE = 0.9;
const LOW_SYMBOL_SIZE = 0.9;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelBounceBackSpeed: 0.15,
	reelSpinSpeedBeforeBounce: 4,
	reelPaddingMultiplierNormal: 1.2,
	reelPaddingMultiplierAnticipated: 10,
	reelSpinDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 2,
	reelSpinSpeed: 3,
	reelBounceSizeMulti: 0.3,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 5,
	reelSpinSpeed: 5,
	reelBounceSizeMulti: 0.05,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const explosion = {
	type: 'spine',
	assetKey: 'explosion',
	animationName: 'explosion',
	sizeRatios: { width: 1, height: 1 },
};

const h1Static = { type: 'sprite', assetKey: 'H1.png', sizeRatios: { width: .85, height: .85 } };
const h2Static = { type: 'sprite', assetKey: 'H2.png', sizeRatios: { width: .85, height: .85 } };
const h3Static = { type: 'sprite', assetKey: 'H3.png', sizeRatios: { width: .85, height: .85 } };
const h4Static = { type: 'sprite', assetKey: 'H4.png', sizeRatios: { width: .85, height: .85 } };
const h5Static = { type: 'sprite', assetKey: 'H5.png', sizeRatios: { width: .85, height: .85 } };

const l1Static = { type: 'sprite', assetKey: 'L1.png', sizeRatios: { width: .85, height: .85 } };
const l2Static = { type: 'sprite', assetKey: 'L2.png', sizeRatios: { width: .85, height: .85 } };
const l3Static = { type: 'sprite', assetKey: 'L3.png', sizeRatios: { width: .85, height: .85 } };
const l4Static = { type: 'sprite', assetKey: 'L4.png', sizeRatios: { width: .80, height: .80 } };
const l5Static = { type: 'sprite', assetKey: 'L5.png', sizeRatios: { width: .85, height: .85 } };

const sStatic = { type: 'sprite', assetKey: 'S.png', sizeRatios: { width: 0.95, height: 0.95 } };
const wStatic = { type: 'sprite', assetKey: 'W.png', sizeRatios: { width: 0.95, height: 0.95 } };

const wSizeRatios = { width: 1.5 * 0.9, height: SPECIAL_SYMBOL_SIZE * 1.15 };
const sSizeRatios = { width: 2.5, height: SPECIAL_SYMBOL_SIZE * 2.3 };

export const SYMBOL_INFO_MAP = {
	H1: { explosion, win: h1Static, postWinStatic: h1Static, static: h1Static, spin: h1Static, land: h1Static },
	H2: { explosion, win: h2Static, postWinStatic: h2Static, static: h2Static, spin: h2Static, land: h2Static },
	H3: { explosion, win: h3Static, postWinStatic: h3Static, static: h3Static, spin: h3Static, land: h3Static },
	H4: { explosion, win: h4Static, postWinStatic: h4Static, static: h4Static, spin: h4Static, land: h4Static },
	H5: { explosion, win: h5Static, postWinStatic: h5Static, static: h5Static, spin: h5Static, land: h5Static },
	L1: { explosion, win: l1Static, postWinStatic: l1Static, static: l1Static, spin: l1Static, land: l1Static },
	L2: { explosion, win: l2Static, postWinStatic: l2Static, static: l2Static, spin: l2Static, land: l2Static },
	L3: { explosion, win: l3Static, postWinStatic: l3Static, static: l3Static, spin: l3Static, land: l3Static },
	L4: { explosion, win: l4Static, postWinStatic: l4Static, static: l4Static, spin: l4Static, land: l4Static },
	L5: { explosion, win: l5Static, postWinStatic: l5Static, static: l5Static, spin: l5Static, land: l5Static },
	W: { explosion, win: wStatic, postWinStatic: wStatic, static: wStatic, spin: wStatic, land: wStatic },
	S: { explosion, win: sStatic, postWinStatic: sStatic, static: sStatic, spin: sStatic, land: sStatic },
} as const;

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
