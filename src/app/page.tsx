import { auth0 } from "@/lib/auth0";
import './globals.css';

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">Welcome! Please signup or login.</h1>
          <div className="flex justify-center gap-4">
            <a href="/auth/login?screen_hint=signup">
              <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
                Sign up
              </button>
            </a>
            <a href="/auth/login">
              <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
                Log in
              </button>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Welcome, {session.user.name}!</h1>
        <p>
          <a href="/auth/logout">
            <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">
              Log out
            </button>
          </a>
        </p>
      </div>
    </main>
  );
}
