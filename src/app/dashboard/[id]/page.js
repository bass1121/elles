export default function UserDashboard({params}) {
  return (
    <div>
      <h1>UserDashboard</h1>
      <hr />
      <p>User Dashboard </p>
      <span>{params.id}</span>
    </div>
  )
}