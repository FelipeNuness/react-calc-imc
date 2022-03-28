import React, { createContext, useState } from 'react';
import { Level } from '../helpers/imc';

type ContextType = {
	weightFieldContext: [number, React.Dispatch<React.SetStateAction<number>>];
	heightFieldContext: [number, React.Dispatch<React.SetStateAction<number>>];
	toShowContext: [
		Level | null,
		React.Dispatch<React.SetStateAction<Level | null>>,
	];
};

const initialState: ContextType = {
	weightFieldContext: [0, () => null],
	heightFieldContext: [0, () => null],
	toShowContext: [null, () => null],
};

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
	const [weightField, setWeightField] = useState<number>(0);
	const [heightField, setHeightField] = useState<number>(0);
	const [toShow, setToShow] = useState<Level | null>(null);

	return (
		<Context.Provider
			value={{
				weightFieldContext: [weightField, setWeightField],
				heightFieldContext: [heightField, setHeightField],
				toShowContext: [toShow, setToShow],
			}}>
			{' '}
			{children}{' '}
		</Context.Provider>
	);
};

// weightFieldContext: [weightField, setWeightField],
// 	heightFieldContext: [heightField, setHeightField],
