import React, { useEffect, useState } from 'react';
import './Fitness.css'

const Fitness = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fitness.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='gym-container'>
            <div className='activity'>
                <h2>Main Body</h2>
                
                {
                    activities.map(activity=> console.log(activities))
                }
                
            </div>
            <div>
                <h3>Aside</h3>
            </div>
        </div>
    );
};

export default Fitness;