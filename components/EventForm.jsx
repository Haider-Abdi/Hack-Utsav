"use client";

import { useState } from "react";
import FormWrapper from "./FormWrapper";

export function EventForm({
    prices,
    setPrices,
    fromUni,
    setFromUni,
    teamName,
    members,
    firstNameMem2,
    lastNameMem2,
    ageMem2,
    phoneMem2,
    semesterMem2,
    uniNameMem2,
    updateFields
}) {
    const calculatePriceForThatEvent = (members) => {
        let priceForThatEvent;
        const memberCount = parseInt(members);

        if (!fromUni) {
            if (memberCount === 1) {
                priceForThatEvent = 200;
            } else if (memberCount === 2) {
                priceForThatEvent = 300;
            }
        }
        if (fromUni) {
            if (memberCount === 1) {
                priceForThatEvent = 300;
            } else if (memberCount === 2) {
                priceForThatEvent = 500;
            }
        }

        return priceForThatEvent;
    }

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        totalPrice = calculatePriceForThatEvent(members);

        setPrices(() => totalPrice);

        return totalPrice;
    };

    return (

        <FormWrapper title="Enter Team's Details">
            <div className="flex flex-col">
                <label>Team Name</label>
                <input autoFocus required type="text" value={teamName} onChange={(e) => updateFields({ teamName: e.target.value })} className="userFormInput" />

                <label>No. of Members</label>
                <select
                    required
                    value={members}
                    onChange={e => updateFields({ members: e.target.value })}
                    className="userFormInput"
                    style={{ color: "white", backgroundColor: "grey" }}
                >
                    <option value="" style={{ color: "black" }}>Select member</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>

                {members === '2' && (
                    <>
                        <label>Member 2 details</label>
                        <label>First Name</label>
                        <input type="text" value={firstNameMem2} onChange={e => updateFields({ firstNameMem2: e.target.value })} className="userFormInput" />

                        <label>Last Name</label>
                        <input type="text" value={lastNameMem2} onChange={e => updateFields({ lastNameMem2: e.target.value })} className="userFormInput" />

                        <label>Email-ID</label>
                        <input type="text" value={ageMem2} onChange={e => updateFields({ ageMem2: e.target.value })} className="userFormInput" />

                        <label>Contact Number</label>
                        <input min={1} type="number" value={phoneMem2} onChange={e => updateFields({ phoneMem2: e.target.value })} className="userFormInput" />

                        <label>Class/Semester</label>
                        <input type="text" value={semesterMem2} onChange={e => updateFields({ semesterMem2: e.target.value })} className="userFormInput" />

                        <label>University/School Roll Number</label>
                        <input type="text" value={uniNameMem2} onChange={e => updateFields({ uniNameMem2: e.target.value })} className="userFormInput" />
                    </>
                )}

            </div>


            <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                Price: ₹ {calculateTotalPrice()}
            </div>
        </FormWrapper>
    )
}
