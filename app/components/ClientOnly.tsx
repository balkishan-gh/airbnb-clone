"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

//  It checks whether we're in server side rendering or not
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  // The moment this component load that means it has finished server side rendering and it can be mounted
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If our application has not mounted we're going to return null
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
