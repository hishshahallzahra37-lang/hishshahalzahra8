body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    background: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1350&q=80')
                no-repeat center center fixed;
    background-size: cover;
    backdrop-filter: blur(2px);
    color: #fff;
}

header {
    text-align: center;
    padding: 40px 20px;
    background: rgba(0,0,0,0.6);
}

header h1 {
    margin: 0;
    font-size: 36px;
}

.search-box {
    text-align: center;
    margin: 25px;
}

.search-box input {
    width: 80%;
    max-width: 400px;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 6px;
}

.menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-gap: 20px;
    padding: 20px;
}

.menu-card {
    background: rgba(40, 25, 15, 0.85);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    text-align: center;
    transition: 0.3s ease;
}

.menu-card:hover {
    transform: scale(1.04);
}

.menu-card h3 {
    margin: 10px 0;
    color: #f8e7c1;
}

.menu-card p {
    color: #e0d0b5;
}

footer {
    text-align: center;
    padding: 20px;
    background: rgba(0,0,0,0.7);
    margin-top: 30px;
    font-size: 14px;
}
