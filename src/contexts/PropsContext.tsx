import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface PropsContextType {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  displayText: string;
  setDisplayText: Dispatch<SetStateAction<string>>;
  isWorking: boolean;
  setIsWorking: Dispatch<SetStateAction<boolean>>;
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}

const PropsContext = createContext<PropsContextType>({
  date: new Date(),
  setDate: () => {},
  displayText: "",
  setDisplayText: () => {},
  isWorking: true,
  setIsWorking: () => {},
  isLoaded: false,
  setIsLoaded: () => {},
});

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState(new Date());
  const [displayText, setDisplayText] = useState("");
  const [isWorking, setIsWorking] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <PropsContext.Provider
      value={{
        date,
        setDate,
        displayText,
        setDisplayText,
        isWorking,
        setIsWorking,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </PropsContext.Provider>
  );
};

export const useProps = () => useContext(PropsContext);
