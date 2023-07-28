import React from "react"

export default function Main() {
    return(
        <div className="main-container">
            
            <div className="btn-container">
                <a href="mailto:erikkaalday@gmail.com" className="email-btn btn"><i className="fa-solid fa-envelope logo"></i>Email</a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" className="linkedin-btn btn"><i className="fa-brands fa-linkedin logo"></i>LinkedIn</a>
            </div>
            
            <div className="info-container">
                <h2 className="info">About</h2>
                <p className="info-text">Hello, I'm Erikka, a dedicated and enthusiastic frontend developer on a quest to learn and grow in the ever-evolving world of web development.

                As someone who is still learning, I embrace challenges with open arms and a hunger for knowledge. Each day presents an opportunity to explore new concepts, frameworks, and techniques that enable me to build more engaging and user-friendly web interfaces.</p>
                
                <h2 className="info">Interests</h2>
                <p className="info-text">Programming, Reading, Meditating, Healthy Lifestyle, Travel, Dog Lover, #ProofOfWork, and Unlimited Creative Expression.</p>
            </div>
            
        </div>
    )
}