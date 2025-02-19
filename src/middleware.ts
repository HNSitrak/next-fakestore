import { withAuth } from "next-auth/middleware";
import { protectedMenu } from "./components/app-siderbar";

export default withAuth({
  pages: { signIn: "/login" },
});

export const config = { matcher: [...protectedMenu.map((item) => `${item.url}/:path*`)] };
