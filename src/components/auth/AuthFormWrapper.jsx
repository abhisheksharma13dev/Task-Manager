"use client"
import "./Auth.css"

export default function AuthFormWrapper ({title, children}) {
    return(
        <div className="auth-wrapper">
            <div className="auth-container">
                <h1>{title}</h1>
                {children}
                <div className="auth-footer">
   
                </div>
            </div>
        </div>
            
      
    )
}