import Image from 'next/image'
import Register from '../pages/createpatient'
import NewPatient from '../pages/newpatient'
import RequestRecord from '../pages/RequestRecord'
import Layout from '../../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex-container'>
    <div className="custom-container">
      <Link
          href="/newpatient"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="custom-text">
            Register a New Patient {' '} 
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
    </div>

    <div className="custom-container">
      <Link
          href="/patientrecord"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="custom-text">
            Register Patient Record {' '} 
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
    </div>
    </main>
  )
}
