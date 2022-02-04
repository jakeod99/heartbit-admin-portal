import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // TODO: conditions for redirecting to login
    // router.push('/login')
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>
          This is the home page at the root of the site. 
          It will act as the login page.
          If already logged in, redirect to search/exercises.
          If not logged in, block access to search and admin.
      </p>
    </div>
  )
}
