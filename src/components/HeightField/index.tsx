import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../contexts/Context';

import styles from './styles.module.css';

export const HeightField = () => {
	const {
		heightFieldContext: [heightField, setHeightField],
		toShowContext: [toShow],
	} = useContext(Context);

	return (
		<input
			className={styles.heightField}
			type='number'
			placeholder='Digite a sua altura. Ex 1.5 (em métros)'
			value={heightField > 0 ? heightField : ''}
			onChange={(e) => setHeightField(Number(e.target.value))}
			disabled={toShow ? true : false}
		/>
	);
};
