import { useContext } from 'react';
import { Context } from '../../contexts/Context';

import styles from './styles.module.css';

export const WeightField = () => {
	const {
		weightFieldContext: [weightField, setWeightField],
		toShowContext: [toShow],
	} = useContext(Context);

	return (
		<input
			className={styles.weightField}
			type='number'
			placeholder='Digite a sua altura. Ex 1.5 (em métros)'
			value={weightField > 0 ? weightField : ''}
			onChange={(e) => setWeightField(Number(e.target.value))}
			disabled={toShow ? true : false}
		/>
	);
};
