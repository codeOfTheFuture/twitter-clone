import { CompositeDecorator } from "draft-js";
import { userHandleStrategy } from "./userHandleStrategy";
import { hashtagStrategy } from "./hashtagStrategy";
import { urlStrategy } from "./urlStrategy";
import { overLimitStrategy } from "./overLimitStrategy";
import TextSpan from "../components/feed/tweetbox/TextSpan";
import OverLimitSpan from "../components/feed/tweetbox/OverLimitSpan";

/**

Creates a composite decorator for a Draft.js editor
@function
@returns {CompositeDecorator} The composite decorator to be used with a Draft.js editor
@example
const compositeDecorator = createCompositeDecorator();
const editorState = EditorState.createEmpty(compositeDecorator);
@requires CompositeDecorator
@requires userHandleStrategy
@requires hashtagStrategy
@requires urlStrategy
@requires overLimitStrategy
@requires TextSpan
@requires OverLimitSpan
*/

export const createCompositeDecorator = (): CompositeDecorator =>
	new CompositeDecorator([
		{
			strategy: userHandleStrategy,
			component: TextSpan,
		},
		{
			strategy: hashtagStrategy,
			component: TextSpan,
		},
		{
			strategy: urlStrategy,
			component: TextSpan,
		},
		{
			strategy: overLimitStrategy,
			component: OverLimitSpan,
		},
	]);
