import { useEffect, useState } from "react";
import api from "@/utils/api";
import { toast } from "sonner";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("user/profile");
        setUser(data.user);
      } catch (err) {
        toast.error(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (!user) return <p>No profile found</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-md shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>UID:</strong> {user.uid}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
};
