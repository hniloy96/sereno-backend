import React, { useState, useEffect } from 'react';

function Albums() {
    // State to hold the list of albums
    const [albums, setAlbums] = useState([]);

    // Fetch the list of albums from the backend API when the component mounts
    useEffect(() => {
        async function fetchAlbums() {
            const res = await fetch('/api/albums');
            const data = await res.json();
            setAlbums(data);
        }
        fetchAlbums();
    }, []);

    return (
        <div>
            <h2>Albums</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title} by {album.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Albums;
