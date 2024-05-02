import { useState, useEffect } from "react";
import supabase from "./utils/supabase";
import AuthPage from "./pages/authPage/AuthPage";
import { Layout } from "./pages/Layout";
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null); // Define type for session

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session); // Update state with session
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session); // Update state with session on change
    });

    return () => subscription.unsubscribe();
  }, []);

  return !session ? <AuthPage /> : <Layout />;
}

export default App;
