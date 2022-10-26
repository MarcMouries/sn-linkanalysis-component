import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>x-snc-linkanalysis component</div>
	);
};

createCustomElement('x-snc-linkanalysis', {
	renderer: {type: snabbdom},
	view,
	styles
});
