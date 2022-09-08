import { createContext, useState } from "react"

export const GlobalContext = createContext()
export const GlobalStorage=({children})=>{
	const [pis,setPis]=useState(0)
	const [cofins,setCofins]=useState(0)
	const [irpj,setIRPJ]=useState(0)
	const [csll,setCSLL]=useState(0)
	const [ct,setCt]=useState()
	const [DO,setDo]=useState()
	const [isv,setIsv]=useState()
	const [lo,setLo]=useState()
	const [soma,setSoma]=useState(0)
	const [fat,setFAT]=useState(0)

	const [pisReal,setPisReal]=useState(0)
	const [cofinsReal,setCofinsReal]=useState(0)
	const [icms,setICMS]=useState(0)
	const [somaReal,setSomaReal]=useState(0)

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
		ct,
		setCt,
		lo,
		setLo,
		DO,
		setDo,
		isv,
		setIsv,
		soma,
		setSoma,

		pisReal,
		setPisReal,
		cofinsReal,
		setCofinsReal,
		icms,
		setICMS,
		somaReal,
		setSomaReal
	}}>
{children}
	</GlobalContext.Provider>)
}