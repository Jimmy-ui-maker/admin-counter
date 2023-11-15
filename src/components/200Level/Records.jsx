import Link from "next/link";
import data from '../local-map/data.json'

export default function Records() {
  return (
    <div className=" container">
      <div className="row g-4  text-center justify-content-center align-items-center">
        <h1>User Page</h1>
        {data.map((user) => (
          <div key={user.id} className="col-lg-3 col-6 text-lg-start">
            <div className="card border-success">
              <div className="card-body">
                <p className=" card-title">{user.title}</p>
                <p className=" card-text">{user.desc}</p>
                <p className=" card-text">{user.image}</p>
                <div className=" justify-content-between align-items-center">
                  <Link
                    className="btn btn-outline-success"
                    href={`/details/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-success"
                    href={`/edit-user/${user.id}`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
