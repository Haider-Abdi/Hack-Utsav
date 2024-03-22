"use client";

import { useState } from "react";
import FormWrapper from "./FormWrapper";

export function EventForm({
    vertical1,
    vertical2,
    vertical3,
    vertical4,
    vertical5,
    vertical6,
    vertical7,
    vertical8,
    updateFields,
    prices,
    setPrices,
    fromUni,
    setFromUni
}) {

    const [v1, setv1] = useState(vertical1);
    const [v2, setv2] = useState(vertical2);
    const [v3, setv3] = useState(vertical3);
    const [v4, setv4] = useState(vertical4);
    const [v5, setv5] = useState(vertical5);
    const [v6, setv6] = useState(vertical6);
    const [v7, setv7] = useState(vertical7);
    const [v8, setv8] = useState(vertical8);


    const calculatePriceForThatEvent = (members) => {
        let priceForThatEvent;
        const memberCount = parseInt(members);

        if (!fromUni) {
            if (memberCount === 1) {
                priceForThatEvent = 100;
            } else if (memberCount === 2) {
                priceForThatEvent = 150;
            } else {
                priceForThatEvent = 200;
            }
        }
        if (fromUni) {
            if (memberCount === 1) {
                priceForThatEvent = 250;
            } else if (memberCount === 2) {
                priceForThatEvent = 400;
            } else {
                priceForThatEvent = 500;
            }
        }

        return priceForThatEvent;
    }

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        [v1, v2, v3, v4, v5, v6, v7, v8].forEach((vertical, vIndex) => {
            vertical.forEach((event, index) => {
                // Check if the event is selected
                if (event.members !== null) {
                    const teamSize = event.members || 1;
                    totalPrice += calculatePriceForThatEvent(teamSize);
                }
            });
        });

        setPrices(() => totalPrice);

        return totalPrice;
    };




    const handleV1CheckboxChange = (index) => {
        // console.log(v1[index].members)

        const updatedData = [...v1];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
            updatedData[index].price = 0;
        }
        setv1(() => updatedData);
        updateFields({ vertical1: updatedData })
    }
    const handleV2CheckboxChange = (index) => {
        const updatedData = [...v2];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
        }
        setv2(() => updatedData);
        updateFields({ vertical2: updatedData })
    }
    const handleV3CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v3[index].members)
        const updatedData = [...v3];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
        }
        setv3(() => updatedData);
        updateFields({ vertical3: updatedData })
    }
    const handleV4CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v4[index].members)
        const updatedData = [...v4];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
        }
        setv4(() => updatedData);
        updateFields({ vertical4: updatedData })
    }
    const handleV5CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v5[index].members)
        const updatedData = [...v5];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
        }
        setv5(() => updatedData);
        updateFields({ vertical5: updatedData })
    }
    const handleV6CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v6[index].members)
        const updatedData = [...v6];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
        }
        setv6(() => updatedData);
        updateFields({ vertical6: updatedData })
    }
    const handleV7CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v7[index].members)
        const updatedData = [...v7];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
        }
        setv7(() => updatedData);
        updateFields({ v7: updatedData });
    }
    const handleV8CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        const updatedData = [...v8];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
            updatedData[index].price = calculatePriceForThatEvent(1);
        } else {
            updatedData[index].members = null;
        }
        setv8(() => updatedData);
        updateFields({ vertical8: updatedData })
    }

    return (
        //TODO: fix unintended first checkbox ticking 
        //TODO: fix check showing when not checked (small fix)
        <FormWrapper title="Events">
            <label className="container-event">
                <h1 className="verticalHead">Innoskill Engineering Drift and Design</h1>
                <div className="events">
                    {
                        v1.map((data, index) => (
                            <div className="event-item " key={data.eventName}>
                                <div className="event-item-label-input ">
                                    <label className="">{data.eventName}</label>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={data.members > 0}
                                            onChange={() => handleV1CheckboxChange(index)}
                                            className={`checkBox`}
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                            }}
                                        />
                                        <div className="absolute inset-0 rounded-sm border border-transparent pointer-events-none" aria-hidden="true"></div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v1];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv1(() => updatedData)
                                        }} className="rounded-lg">
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="verticalHead">Innoskill Business and Management Conundrum</h1>
                <div className="events">
                    {
                        v2.map((data, index) => (
                            <div className="event-item " key={data.eventName}>
                                <div className="event-item-label-input">
                                    <label>{data.eventName}</label>
                                    <input type="checkbox" checked={data.members > 0} onChange={() => handleV2CheckboxChange(index)} className="checkBox" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                    }} />

                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v2];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv2(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="verticalHead">Innoskill Healthcare Mystery</h1>
                <div className="events">
                    {
                        v3.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <div className="event-item-label-input">
                                    <label>{data.eventName}</label>
                                    <input type="checkbox" checked={data.members > 0} onChange={() => handleV3CheckboxChange(index)} className="checkBox" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                    }} />

                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v3];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv3(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="verticalHead">Innoskill Sustainathon</h1>
                <div className="events">
                    {
                        v4.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <div className="event-item-label-input">
                                    <label>{data.eventName}</label>
                                    <input type="checkbox" checked={data.members > 0} onChange={() => handleV4CheckboxChange(index)} className="checkBox" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                    }} />

                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v4];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv4(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="verticalHead">Innoskill Culinary and Hospitality</h1>
                <div className="events">
                    {
                        v5.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <div className="event-item-label-input">
                                    <label>{data.eventName}</label>
                                    <input type="checkbox" checked={data.members > 0} onChange={() => handleV5CheckboxChange(index)} className="checkBox" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                    }} />

                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v5];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv5(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="verticalHead">Innoskill Law Knot</h1>
                <div className="events">
                    {
                        v6.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <div className="event-item-label-input">
                                    <label>{data.eventName}</label>
                                    <input type="checkbox" checked={data.members > 0} onChange={() => handleV6CheckboxChange(index)} className="checkBox" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                    }} />

                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v6];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv6(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="verticalHead">Innoskill Media and Literary Stumper</h1>
                <div className="events">
                    {
                        v7.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <div className="event-item-label-input">
                                    <label>{data.eventName}</label>
                                    <input type="checkbox" checked={data.members > 0} onChange={() => handleV7CheckboxChange(index)} className="checkBox" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                    }} />

                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v7];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv7(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="verticalHead">Innoskill Social Spectrum</h1>
                <div className="events">
                    {
                        v8.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <div className="event-item-label-input">
                                    <label>{data.eventName}</label>
                                    <input type="checkbox" checked={data.members > 0} onChange={() => handleV8CheckboxChange(index)} className="checkBox" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                                    }} />

                                </div>
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v8];
                                            updatedData[index].members = e.target.value;
                                            updatedData[index].price = calculatePriceForThatEvent(e.target.value);
                                            setv8(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>
            <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                Price:₹ {calculateTotalPrice()}
            </div>
        </FormWrapper>
    )
}