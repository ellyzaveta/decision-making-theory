import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Component from '../component/Component';

const MainPage = () => {

    const [paretoSolutions, setParetoSolutions] = useState([]);
    const [slaterSolutions, setSlaterSolutions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/dmt/lab1/paretoSolutions`)
            .then((res) => {
                setParetoSolutions(res.data);
            })
    }, [paretoSolutions]);

    useEffect(() => {
        axios.get(`http://localhost:8080/dmt/lab1/slaterSolutions`)
            .then((res) => {
                setSlaterSolutions(res.data);
            })
    }, [slaterSolutions]);

    return (
        <div>
            {paretoSolutions.map((solution, index) => (
                <div key={index}>
                    <Component  heading={"Pareto Optimal Solution " + (index + 1)} 
                                table={solution.table} 
                                optimalSet={solution.optimalSet}/>
                </div>
            ))}

            {slaterSolutions.map((solution, index) => (
                <div key={index}>
                    <Component  heading={"Slater Optimal Solution " + (index + 1)} 
                                table={solution.table} 
                                optimalSet={solution.optimalSet}/>
                </div>
            ))}

        </div>
    );
}

export default MainPage;