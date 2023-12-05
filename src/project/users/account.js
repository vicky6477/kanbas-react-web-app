import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // This hook is used to get the 'id' param from the URL

  useEffect(() => {
    const fetchAccountData = async () => {
      let accountData;
      if (id) {
        accountData = await client.findUserById(id); // Fetch specific user's account by ID
      } else {
        accountData = await client.account(); // Fetch current user's account
      }
      setAccount(accountData);
    };

    fetchAccountData();
  }, [id]); // Dependency array ensures useEffect runs when 'id' changes

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  const save = async () => {
    if (account && account._id) {
      try {
        const updatedAccount = await client.updateUser(account);
        console.log("Account updated:", updatedAccount);
        navigate("/project/account"); // Redirect to account page or a confirmation page
      } catch (error) {
        console.error("Error updating account:", error);
        // Handle error (e.g., show error message)
      }
    } else {
      console.error("No account to update or account ID is missing");
      // Handle error (e.g., show error message)
    }
  };

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.password} onChange={(e) => setAccount({ ...account, password: e.target.value })} />
                    <input
                        value={account.firstName}
                        onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
                    />
                    <input value={account.lastName} onChange={(e) => setAccount({ ...account, lastName: e.target.value })} />
                    <input value={account.dob} onChange={(e) => setAccount({ ...account, dob: e.target.value })} />
                    <input value={account.email} onChange={(e) => setAccount({ ...account, email: e.target.value })} />
                    <select onChange={(e) => setAccount({ ...account, role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary w-100" onClick={save}>
                        Save
                    </button>
                     <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                    <button className="btn btn-danger w-100" onClick={signout}>Signout</button>
                   
                </div>
            )}
        </div>
    );
}
export default Account;
