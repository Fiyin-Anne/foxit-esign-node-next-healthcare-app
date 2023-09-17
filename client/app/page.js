import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="h-screen bg-gray-200 w-full flex flex-col justify-center items-center space-y-9">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Patient Registeration</h2>
          <p>Register a new patient.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
            <Link
              href="/patients/registration"
              rel="noopener noreferrer"
            >Start Here</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Request Patient Record</h2>
          <p>Request and download medical record.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href="/patients/request-record"
                rel="noopener noreferrer"
              >Start Here</Link>
            </button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;