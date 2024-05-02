import supabase from "@/utils/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white w-96 p-11 rounded-3xl">
        <Auth
          theme=""
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "darkorange",
                  brandAccent: "orange",
                },
              },
            },
            // className: {
            //   container: "flex w bg-white justify-center items-center",
            // },
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default AuthPage;
