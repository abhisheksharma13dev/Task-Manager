"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#1e293b',
        marginBottom: '2rem',
        fontWeight: '600'
      }}>
        Welcome to Our App
      </h1>
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        marginTop: '1rem'
      }}>
        <Link 
          href="/Login" 
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            color: '#4f46e5',
            border: '1px solid #4f46e5'
          }}
        >
          Log In
        </Link>
        <Link 
          href="/Signup" 
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            border: '1px solid #4f46e5'
          }}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}