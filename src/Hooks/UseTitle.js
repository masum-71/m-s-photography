import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - m'sPhotography`;
  }, [title]);
};

export default useTitle;
