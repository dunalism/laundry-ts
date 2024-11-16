import { useEffect } from "react";
import { themeChange } from "theme-change";

function Users() {
  useEffect(() => {
    themeChange(false); // false agar tidak perlu toggle ulang saat reload
  }, []);
  return (
    <div>
      Users
      <div>hhai</div>
      <button
        data-set-theme="cyberpunk"
        data-act-class="ACTIVECLASS"
        className="btn"
      >
        cyberpunk
      </button>
    </div>
  );
}

export default Users;
