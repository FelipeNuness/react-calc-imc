import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { HeightField } from './components/HeightField';
import { WeightField } from './components/WeightField';
import { Button } from './components/Button';
import { levels } from './helpers/imc';
import { GridItem } from './components/GridItem';
import { useContext } from 'react';
import { Context } from './contexts/Context';

const App = () => {
	const {
		toShowContext: [toShow, setToShow],
		heightFieldContext: [heightField, setHeightField],
		weightFieldContext: [weightField, setWeightField],
	} = useContext(Context);

	const handleButtonBack = () => {
		setToShow(null);
		setHeightField(0);
		setWeightField(0);
	};
	return (
		<div className={styles.main}>
			<header>
				<div className={styles.headerContainer}>
					<img src={poweredImage} width={150} />
				</div>
			</header>
			<div className={styles.container}>
				<div className={styles.leftSide}>
					<h1>Calcule o seu IMC</h1>
					<p>
						IMC é a sigla para Índice de Massa Corpória, parâmetro adotado pela
						Organização Mundial de Saúde para calcular o peso ideal de cada
						pessoa.
					</p>

					<HeightField />
					<WeightField />
					<Button />
				</div>
				<div className={styles.rightSide}>
					{!toShow && (
						<div className={styles.grid}>
							{levels.map((item, key) => (
								<GridItem key={key} item={item} />
							))}
						</div>
					)}
					{toShow && (
						<div className={styles.rightBig}>
							<div className={styles.rightArrow} onClick={handleButtonBack}>
								<img src={leftArrowImage} alt='' width={25} />
							</div>
							<GridItem item={toShow} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
