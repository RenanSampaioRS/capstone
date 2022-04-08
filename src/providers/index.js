import { UserProvider } from "./UserProvider";
import { LogRegProvider } from "./LogRegProvider";
import { VacProvider } from "./VacancieProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LogRegProvider>
        <VacProvider>{children}</VacProvider>
      </LogRegProvider>
    </UserProvider>
  );
};

export default Providers;
