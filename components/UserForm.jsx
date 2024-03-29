"use client";

import FormWrapper from "./FormWrapper";

export function UserForm({
    firstName,
    lastName,
    email,
    age,
    phone,
    option,
    uniName,
    semester,
    rollNo,
    teamName,
    updateFields,
    fromUni,
    setFromUni
}) {
    return (
        <FormWrapper title="Enter Your Details" subtitle={"Please Fill Your Personal Details To Proceed"}>
            <div className="flex flex-col">
                <div className="userFormContainer">
                    <label className="userFormLabel">First Name</label>
                    <input autoFocus required type="text" className="userFormInput" value={firstName} onChange={e => updateFields({ firstName: e.target.value })} />
                </div>


                <div className="userFormContainer">

                    <label className="userFormLabel">Last Name</label>
                    <input required type="text" className="userFormInput" value={lastName} onChange={e => updateFields({ lastName: e.target.value })} />
                </div>


                <div className="userFormContainer">

                    <label className="userFormLabel">Email-ID</label>
                    <input required type="email" className="userFormInput" value={email} onChange={e => updateFields({ email: e.target.value })} />
                </div>


                <div className="userFormContainer">

                    <label className="userFormLabel">Age</label>
                    <input required min={1} type="text" className="userFormInput" value={age} onChange={e => updateFields({ age: e.target.value })} />
                </div>


                <div className="userFormContainer">

                    <label className="userFormLabel">Contact Number</label>
                    <input required min={1} type="text" className="userFormInput" value={phone} onChange={e => updateFields({ phone: e.target.value })} />
                </div>

                <div className="userFormContainer" >

                    <label className="userFormLabel">Team Name</label>
                    <input required type="text" className="userFormInput" value={teamName} onChange={(e) => updateFields({ teamName: e.target.value })} />
                </div>
                <div className="userFormContainer">
                    <label className="userFormLabel">Where Do You Study
                    </label>
                    <select value={option} onChange={(e) => {
                        setFromUni(() => e.target.value !== "School")
                        updateFields({ option: e.target.value });

                    }} className="p-2 w-full rounded-lg text-gray-800">
                        <option value={"School"}>Mriirs/Mru</option>
                        <option value={"University"}>Others</option>
                    </select>
                </div>

                <div className="userFormContainer" >

                    <label className="userFormLabel">University/School Name</label>
                    <input required type="text" className="userFormInput" value={uniName} onChange={e => updateFields({ uniName: e.target.value })} />
                </div>


                <div className="userFormContainer" >

                    <label className="userFormLabel">Class/Semester</label>
                    <input required type="text" className="userFormInput" value={semester} onChange={e => updateFields({ semester: e.target.value })} />
                </div>


                <div className="userFormContainer" >

                    <label className="userFormLabel">University/School Roll Number</label>
                    <input required type="text" className="userFormInput" value={rollNo} onChange={e => updateFields({ rollNo: e.target.value })} />
                </div>
            </div>
        </FormWrapper>
    )
}