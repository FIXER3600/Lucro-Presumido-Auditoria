import { createContext, useState } from "react"

export const GlobalContext = createContext()
export const GlobalStorage=({children})=>{
	const [pis,setPis]=useState(0)
	const [cofins,setCofins]=useState(0)
	const [irpj,setIRPJ]=useState(0)
	const [csll,setCSLL]=useState(0)
	const [soma,setSoma]=useState(0)
	const [fat,setFAT]=useState()
return(
	<GlobalContext.Provider 
	value={{
		pis,
		setPis,
		cofins,
		setCofins,
		irpj,
		setIRPJ,
		fat,
		setFAT,
		csll,
		setCSLL,
		soma,
		setSoma
	}}>
{children}
	</GlobalContext.Provider>)
}