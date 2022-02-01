import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
