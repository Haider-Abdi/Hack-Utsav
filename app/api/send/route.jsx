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
    } = await req.json()

    const auth = await google.auth.getClient({
        credentials: JSON.parse(process.env.SECRETS_JSON),
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    const sheets = google.sheets({ version: "v4", auth });

    let values = [[
        firstName, lastName, email, age, phone, option, uniName, semester, rollNo, teamName
    ]]


    const resource = {
        values
    };

    try {

        await write([], resource, sheets, "1");

        return new Response(JSON.stringify("Updated Cells"), { status: 201 });

    } catch (error) {
        console.log(error);
        return new Response(`Failed Write`, { status: 500 });
    }
}