import { UserAppShell } from "../components/UserAppShell";
import { useAuth } from "../provider/authProvider";

export default function HomePage() {
  const { token, role } = useAuth();

  return (
    <>
      <UserAppShell> Home {token}</UserAppShell>
    </>
  );
}
