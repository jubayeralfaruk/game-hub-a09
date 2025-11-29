import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../hooks/useTitle";

const UserProfile = () => {
  useTitle("My Profile");
  const { user, setUser, loading, setLoading, updateUser } = useContext(AuthContext);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;    

    setLoading(true);
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Edit SuccessFully")
      })
      .catch((error) => {
        toast.error("Update failed: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 shadow-lg rounded-lg h-[60vh] ">
      <h2 className="text-3xl font-bold text-center mb-4">My Profile</h2>

      {/* Profile Photo */}
      <div className="flex justify-center mb-4">
        <img
          src={
            user?.photoURL || "https://via.placeholder.com/100?text=No+Photo"
          }
          alt="User"
          className="w-24 h-24 rounded-full border shadow-lg"
        />
      </div>

      {/* User Info */}
      {!editing ? (
        <div className="text-center">
          <p className="text-lg font-semibold">
            Name: {user?.displayName || "Not set"}
          </p>
          <p className="text-lg">Email: {user?.email}</p>
          <button
            onClick={() => setEditing(true)}
            className="btn btn-neutral mt-4"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block mb-2 font-semibold">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="input input-bordered w-full mb-4"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <div className="flex justify-between">
            <button
              className="btn btn-success"
              type="submit"
              disabled={loading}
            >
              {loading ? "Updating..." : "Save"}
            </button>
            <button className="btn btn-error" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
