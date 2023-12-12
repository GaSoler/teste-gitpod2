import { ReactNode, createContext } from "react";

interface WaterContextProps  {

}

interface WaterProviderProps {
  children: ReactNode
}

export const WaterContext = createContext({} as WaterContextProps);

export function WaterProvider({ children }: WaterProviderProps) {

  return (
    <WaterContext.Provider
      value={{
        
      }}
    >
      {children}
    </WaterContext.Provider>
  )
}