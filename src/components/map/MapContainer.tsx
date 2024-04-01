import React, { useEffect, useState } from 'react';
import pika from '../../assets/pika.jpeg';

const MapContainer = () => {
    const [imageData, setImageData] = useState<string>('');

    useEffect(() => {
        fetch(pika)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const dataURL = reader.result as string;
                    setImageData(dataURL);
                };
                reader.readAsDataURL(blob);
            })
            .catch(error => console.error('Error fetching image:', error));
    }, []);

    const swapImg = (img: string, id: number) => {
        const sendData = {
            img: img,
            id: id
        };

        fetch('http://localhost:5000/swapImg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
        .then(response => {
            console.log(response);
            if (response.ok) {
                console.log('Image swapped successfully!');
            } else {
                console.error('Failed to swap image');
            }
        })
        .catch(error => {
            console.error('Error swapping image:', error);
        });
    };

    const handleImgClick = () => {
        const id = 1;
        swapImg(imageData, id); 
    };

    console.log(pika);
    return (
        <div>
            <h1 onClick={handleImgClick}>MapContainer</h1>
        </div>
    );
}

export default MapContainer;
