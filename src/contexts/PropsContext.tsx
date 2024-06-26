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
  dsContent: string[];
  setDsContent: Dispatch<SetStateAction<string[]>>;
  deContent: string[];
  setDeContent: Dispatch<SetStateAction<string[]>>;
  bizContent: string[];
  setBizContent: Dispatch<SetStateAction<string[]>>;
  ccContent: string[];
  setCcContent: Dispatch<SetStateAction<string[]>>;
  otherNotice: string[][];
  setOtherNotice: Dispatch<SetStateAction<string[][]>>;
  displayText: string;
  setDisplayText: Dispatch<SetStateAction<string>>;
  currentEditor: string;
  setCurrentEditor: Dispatch<SetStateAction<string>>;
  isWorking: boolean;
  setIsWorking: Dispatch<SetStateAction<boolean>>;
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
  downloadPdfUrl: string;
  setDownloadPdfUrl: Dispatch<SetStateAction<string>>;
  downloadPptxUrl: string;
  setDownloadPptxUrl: Dispatch<SetStateAction<string>>;
  downloadMdUrl: string;
  setDownloadMdUrl: Dispatch<SetStateAction<string>>;
  selectedTheme: string;
  setSelectedTheme: Dispatch<SetStateAction<string>>;
}

const PropsContext = createContext<PropsContextType>({
  date: new Date(),
  setDate: () => {},
  dsContent: ["", ""],
  setDsContent: () => {},
  deContent: ["", ""],
  setDeContent: () => {},
  bizContent: ["", ""],
  setBizContent: () => {},
  ccContent: ["", ""],
  setCcContent: () => {},
  otherNotice: new Array<string[]>(),
  setOtherNotice: () => {},
  displayText: "",
  setDisplayText: () => {},
  currentEditor: "template",
  setCurrentEditor: () => {},
  isWorking: false,
  setIsWorking: () => {},
  isLoaded: false,
  setIsLoaded: () => {},
  downloadPdfUrl: "",
  setDownloadPdfUrl: () => {},
  downloadPptxUrl: "",
  setDownloadPptxUrl: () => {},
  downloadMdUrl: "",
  setDownloadMdUrl: () => {},
  selectedTheme: "dark",
  setSelectedTheme: () => {},
});

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState(new Date());
  const [dsContent, setDsContent] = useState(["", ""]);
  const [deContent, setDeContent] = useState(["", ""]);
  const [bizContent, setBizContent] = useState(["", ""]);
  const [ccContent, setCcContent] = useState(["", ""]);
  const [otherNotice, setOtherNotice] = useState<string[][]>([]);
  const [displayText, setDisplayText] = useState("");
  const [currentEditor, setCurrentEditor] = useState("template");
  const [isWorking, setIsWorking] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [downloadPdfUrl, setDownloadPdfUrl] = useState("");
  const [downloadPptxUrl, setDownloadPptxUrl] = useState("");
  const [downloadMdUrl, setDownloadMdUrl] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("dark");

  return (
    <PropsContext.Provider
      value={{
        date,
        setDate,
        dsContent,
        setDsContent,
        deContent,
        setDeContent,
        bizContent,
        setBizContent,
        ccContent,
        setCcContent,
        otherNotice,
        setOtherNotice,
        displayText,
        setDisplayText,
        currentEditor,
        setCurrentEditor,
        isWorking,
        setIsWorking,
        isLoaded,
        setIsLoaded,
        downloadPdfUrl,
        setDownloadPdfUrl,
        downloadPptxUrl,
        setDownloadPptxUrl,
        downloadMdUrl,
        setDownloadMdUrl,
        selectedTheme,
        setSelectedTheme,
      }}
    >
      {children}
    </PropsContext.Provider>
  );
};

export const useProps = () => useContext(PropsContext);
