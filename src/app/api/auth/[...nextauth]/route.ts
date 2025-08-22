import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

interface JWTToken {
  sub?: string;
  role?: string;
  [key: string]: any;
}

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: `https://${process.env.AUTH0_DOMAIN}`,
    }),
  ],
  pages: {
    signIn: "/auth/signin"
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
  async session({ session, token }: { session: Session; token: JWTToken }) {
    if (session.user) {
      session.user.id = token.sub!;
      session.user.role = token.role || "user";
    }
    return session;
  },
  async jwt({ token, user }: { token: JWTToken; user?: User }) {
    if (user) {
      token.role = user.email === "admin@example.com" ? "admin" : "user";
    }
    return token;
  }

  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
