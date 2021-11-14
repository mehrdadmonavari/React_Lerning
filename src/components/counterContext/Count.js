import CountOne from "./CountOne";
import CountProvider from "./CountProvider";

const Count = () => {
  return (
    <CountProvider>
      <CountOne />
    </CountProvider>
  );
};

export default Count;
