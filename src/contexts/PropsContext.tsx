import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface PropsContextType {
  displayText: string;
  setDisplayText: Dispatch<SetStateAction<string>>;
  isWorking: boolean;
  setIsWorking: Dispatch<SetStateAction<boolean>>;
}

const PropsContext = createContext<PropsContextType>({
  displayText: "",
  setDisplayText: () => {},
  isWorking: true,
  setIsWorking: () => {},
});

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayText, setDisplayText] = useState("");
  const [isWorking, setIsWorking] = useState(true);

  return (
    <PropsContext.Provider
      value={{ displayText, setDisplayText, isWorking, setIsWorking }}
    >
      {children}
    </PropsContext.Provider>
  );
};

export const useProps = () => useContext(PropsContext);
