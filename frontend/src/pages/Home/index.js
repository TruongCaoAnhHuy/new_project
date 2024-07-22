function Home() {
    const userName = sessionStorage.getItem('userName') ? JSON.parse(sessionStorage.getItem('userName')) : ''
    return (
        <div className="App">
            <h1>{userName}</h1>
        </div>
    );
}

export default Home;
