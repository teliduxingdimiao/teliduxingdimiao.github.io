import { auth, provider } from "./firebase-init.js";
import { signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// 绑定登录按钮
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", async () => {
            try {
                const result = await signInWithPopup(auth, provider);
                alert(`欢迎，${result.user.displayName}`);
            } catch (error) {
                console.error("登录失败:", error);
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                await signOut(auth);
                alert("已退出登录");
            } catch (error) {
                console.error("退出失败:", error);
            }
        });
    }
});
