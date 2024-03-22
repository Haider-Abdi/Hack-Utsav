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
        vertical1,
        vertical2,
        vertical3,
        vertical4,
        vertical5,
        vertical6,
        vertical7,
        vertical8,
        v7
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

        await write(vertical1, resource, sheets, "1");
        await write(vertical2, resource, sheets, "2");
        await write(vertical3, resource, sheets, "3");
        await write(vertical4, resource, sheets, "4");
        await write(vertical5, resource, sheets, "5");
        await write(vertical6, resource, sheets, "6");
        await write(vertical7, resource, sheets, "7");
        await write(vertical8, resource, sheets, "8");

        return new Response(JSON.stringify("Updated Cells"), { status: 201 });

    } catch (error) {
        console.log(error);
        return new Response(`Failed Write`, { status: 500 });
    }
}