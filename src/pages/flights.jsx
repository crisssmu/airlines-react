import React from "react";
import { useState, useEffect } from "react";
import images from "../assets/imagen";
import './flights.css';

const Flights = () => {
    const [selectOption, setSelectOption] = useState('');
    const [people, setPeople] = useState(1);
    const [trip, setTrip] = useState(false);
    useEffect(() => {
        document.title = "Vuelos";
    }, []);
    const handleDropdown = (e) => {
        setSelectOption(e.target.value);
        if (e.target.value === 'Ida y vuelta') {
            setTrip(true);
        } else {
            setTrip(false);
        }
    }

    const plusPeople = () => {
        setPeople(people + 1);
    }

    const minusPeople = () => {
        if (people === 1) return;
        setPeople(people - 1);
    }

    const handleType = (e) => {
        setSelectOption(e.target.value);
    }



    return (
        <div>
            <div className="fly" style={{backgroundImage: `url(${images.paisaje})`}}>
            <div className="flights"  >
                <h1>Busca en cientos de lugares</h1>
                <div className="container-flights">
                    <div className="container-list">
                        <select className="trip" value={selectOption} onChange={handleDropdown}>
                            <option value="Solo ida" onClick={() => setTrip(trip)}>Solo ida</option>
                            <option value="Ida y vuelta">Ida y vuelta</option>
                        </select>
                        <div className="people">
                            <span className="minus" onClick={minusPeople}>-</span>
                            <span>Pasajero</span>
                            <span> {people} </span>
                            <span className="plus" onClick={plusPeople}>+</span>
                        </div>
                        <select className="type" onChange={handleType}>
                            <option value={1}>Economica Premium</option>
                            <option value={2}>Ejecutiva</option>
                            <option value={3}>Primera clase</option>
                            <option value={4}>Mixta</option>
                        </select>
                    </div>
                    <div className="container-search">
                        <form>
                            <div className="search-origin">
                                <label>Origen</label>
                                <div className="origin">
                                    <img width={20} src={images.avion} alt="" />
                                    <input type="text" placeholder="Origen" />
                                </div>
                            </div>
                            <img className="change" width={20} src={images.change} alt="" />
                            <div className="search-destination">
                                <label>Destino</label>
                                <div className="destination">
                                    <img width={20} src={images.avion} alt="" />
                                    <input type="text" placeholder="Destino" />
                                </div>
                            </div>
                            <div className="search-date">
                                <input className="one-way" type="date" />
                                {trip && <input className="return-date" type="date" />}
                            </div>
                            <button>Buscar</button>
                        </form>
                    </div>
                </div>
                <div className="flights-list">
</div>
                </div>
            </div>
        </div>
    );
}

export default Flights;