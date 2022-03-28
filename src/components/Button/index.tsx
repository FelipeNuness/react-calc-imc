import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import { calculateImc } from '../../helpers/imc';

import styles from './styles.module.css';

export const Button = () => {
	const {
		heightFieldContext: [heightField],
		weightFieldContext: [weightField],
		toShowContext: [toShow, setToShow],
	} = useContext(Context);
	const handleCalculateButton = () => {
		if (heightField && weightField) {
			setToShow(calculateImc(heightField, weightField));
		} else {
			alert('Preencha Todos Os Campos');
		}
	};
	return (
		<button
			className={styles.button}
			onClick={handleCalculateButton}
			disabled={toShow ? true : false}>
			Calcular
		</button>
	);
};
