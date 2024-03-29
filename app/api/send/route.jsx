import { write } from "@/utils/write";
import { google } from "googleapis"
 
export const POST = async (req) => {
    const {
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
        members,
        firstNameMem2,
        lastNameMem2,
        ageMem2,
        phoneMem2,
        semesterMem2,
        uniNameMem2,
        fee,
        timestamp,
        transactionID,
        
        
    } = await req.json()

    const auth = await google.auth.getClient({
        credentials: JSON.parse(process.env.SECRETS_JSON),
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    const sheets = google.sheets({ version: "v4", auth });

    let values = [[
        firstName, lastName, email, age, phone, option, uniName, semester, rollNo, teamName, members, firstNameMem2, lastNameMem2, ageMem2, phoneMem2, semesterMem2, uniNameMem2, fee, timestamp , transactionID
    ]]

    const resource = {
        values
    };

    try {
        await write(resource, sheets);

        return new Response(JSON.stringify("Updated Cells"), { status: 201 });

    } catch (error) {
        console.log(error);
        return new Response(`Failed Write`, { status: 500 });
    }
}