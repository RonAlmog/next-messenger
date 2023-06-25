import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

// list of protected routes.
// only authenticated users can reach these paths
export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
