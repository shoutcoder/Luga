'use client'; // <--- add this at top
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUserData } from '@/utils/userData'; // adjust path
type UserData = {
    userId: string;
    role: string;
  } | null;
export default function Role() {
    const [user, setUser] = useState<UserData>(null);

  useEffect(() => {
    async function fetchUser() {
      const data = await getUserData();
      setUser(data);
    }
    fetchUser();
  }, []);

  return (
    <div>
       {user?.role === "ADMIN" && (
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
        )}
    </div>
  );
}
