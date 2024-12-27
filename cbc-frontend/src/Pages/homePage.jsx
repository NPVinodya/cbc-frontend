export default function HomePage() {
    return (
        <div className="homepage-container">
            <header className="header">
                <h1>Welcome to My Website</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="hero">
                <h2>Your One-Stop Solution</h2>
                <p>Discover amazing services and solutions tailored just for you.</p>
                <button className="cta-button">Get Started</button>
            </main>
            <footer className="footer">
                <p>&copy; 2024 My Website. All Rights Reserved.</p>
            </footer>
        </div>
    );
}