import FormWrapper from "./FormWrapper";

export function TeamForm({
  teamName,
  members,
  firstNameMem2,
  lastNameMem2,
  ageMem2,
  phoneMem2,
  semesterMem2,
  uniNameMem2,
  firstNameMem3,
  lastNameMem3,
  ageMem3,
  phoneMem3,
  semesterMem3,
  uniNameMem3,
  firstNameMem4,
  lastNameMem4,
  ageMem4,
  phoneMem4,
  semesterMem4,
  uniNameMem4,
  updateFields
}) {
  return (
    <FormWrapper title ="Enter Team's Details">
      <div className="flex flex-col">

      <label>Team Name</label>
      <input autoFocus required type="text" value={teamName} onChange={(e) => updateFields({ teamName: e.target.value })} className="userFormInput" />

      <label>No. of Members</label>
      <input required min={1} type="number" value={members} onChange={e => updateFields({ members: e.target.value })} className="userFormInput" />

      <label>Member 2 details</label>
      <label>First Name</label>
      <input type="text" value={firstNameMem2} onChange={e => updateFields({ firstNameMem2: e.target.value })} className="userFormInput" />

      <label>Last Name</label>
      <input type="text" value={lastNameMem2} onChange={e => updateFields({ lastNameMem2: e.target.value })} className="userFormInput" />

      <label>Age</label>
      <input min={1} type="number" value={ageMem2} onChange={e => updateFields({ ageMem2: e.target.value })} className="userFormInput" />

      <label>Contact Number</label>
      <input min={1} type="number" value={phoneMem2} onChange={e => updateFields({ phoneMem2: e.target.value })} className="userFormInput" />

      <label>Class/Semester</label>
      <input type="text" value={semesterMem2} onChange={e => updateFields({ semesterMem2: e.target.value })} className="userFormInput" />

      <label>University/School Roll Number</label>
      <input type="text" value={uniNameMem2} onChange={e => updateFields({ uniNameMem2: e.target.value })} className="userFormInput" />

      <label>Member 3 details</label>
      <label>First Name</label>
      <input type="text" value={firstNameMem3} onChange={e => updateFields({ firstNameMem3: e.target.value })} className="userFormInput" />

      <label>Last Name</label>
      <input type="text" value={lastNameMem3} onChange={e => updateFields({ lastNameMem3: e.target.value })} className="userFormInput" />

      <label>Age</label>
      <input min={1} type="number" value={ageMem3} onChange={e => updateFields({ ageMem3: e.target.value })} className="userFormInput" />

      <label>Contact Number</label>
      <input min={1} type="number" value={phoneMem3} onChange={e => updateFields({ phoneMem3: e.target.value })} className="userFormInput" />

      <label>Class/Semester</label>
      <input type="text" value={semesterMem3} onChange={e => updateFields({ semesterMem3: e.target.value })} className="userFormInput" />

      <label>University/School Roll Number</label>
      <input type="text" value={uniNameMem3} onChange={e => updateFields({ uniNameMem3: e.target.value })} className="userFormInput" />

      <label>Member 4 details</label>
      <label>First Name</label>
      <input type="text" value={firstNameMem4} onChange={e => updateFields({ firstNameMem4: e.target.value })} className="userFormInput" />

      <label>Last Name</label>
      <input type="text" value={lastNameMem4} onChange={e => updateFields({ lastNameMem4: e.target.value })} className="userFormInput" />

      <label>Age</label>
      <input min={1} type="number" value={ageMem4} onChange={e => updateFields({ ageMem4: e.target.value })} className="userFormInput" />

      <label>Contact Number</label>
      <input min={1} type="number" value={phoneMem4} onChange={e => updateFields({ phoneMem4: e.target.value })} className="userFormInput" />

      <label>Class/Semester</label>
      <input type="text" value={semesterMem4} onChange={e => updateFields({ semesterMem4: e.target.value })} className="userFormInput" />

      <label>University/School Roll Number</label>
      <input type="text" value={uniNameMem4} onChange={e => updateFields({ uniNameMem4: e.target.value })} className="userFormInput" />
      </div>
    </FormWrapper>
  )
}