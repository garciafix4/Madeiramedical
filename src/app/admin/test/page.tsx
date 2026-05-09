export default function AdminTestPage() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#023047" }}>✅ Admin routing works</h1>
      <p>If you see this, the /admin route segment is working correctly on Vercel.</p>
      <a href="/admin/login" style={{ color: "#046b9f" }}>→ Go to Login</a>
    </div>
  );
}
