import { createContext, useContext, ReactNode, useState } from 'react';

interface SubjectContextProps {
  selectedSubject: string | null;
  setSelectedSubject: (subject: string | null) => void;
}

const SubjectContext = createContext<SubjectContextProps | undefined>(undefined);

export const SubjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <SubjectContext.Provider value={{ selectedSubject, setSelectedSubject }}>
      {children}
    </SubjectContext.Provider>
  );
};

export const useSubjectContext = () => {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error('useSubjectContext must be used within a SubjectProvider');
  }
  return context;
};