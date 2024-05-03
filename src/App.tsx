import { useState, useEffect } from "react";
import supabase from "./utils/supabase";
import AuthPage from "./pages/authPage/AuthPage";
import { Layout } from "./pages/Layout";
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return !session ? (
    <AuthPage />
  ) : (
    <div>
      <Layout />
    </div>
  );
}

export default App;
