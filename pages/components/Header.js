import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session? } = useSession();

  return (
    <div className="bg-gray-400 min-h-10 flex justify-evenly px-8 pt-4 pb-4 items-center">
      {/* Left */}
      <section className=" mr-auto">
        <div className="left mr-auto">Instagram</div>
      </section>

      {/* Middle */}
      <section>
        <div className="middle ">Search</div>
      </section>

      {/* Right */}
      <section className=" ml-auto">
        <div className="right ml-auto">
          {session ? (
            <>
              Signed in as {session.user.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Header;
