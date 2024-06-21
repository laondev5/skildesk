"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const withAuthRoleRedirect = (allowedRoles, WrappedComponent) => {
  const Wrapper = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    // Redirect to login page if session is loading
    if (status === "loading") {
      return <div>Loading...</div>;
    }

    // Redirect to login page if session is not present
    if (!session) {
      router.push("/login");
      return null;
    }

    // Redirect to appropriate page based on user's role
    if (!allowedRoles.includes(session.user.role)) {
      router.push("/unauthorized");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuthRoleRedirect;
