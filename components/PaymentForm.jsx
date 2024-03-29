import { useEffect, useState } from 'react';
import FormWrapper from "./FormWrapper";
import UPI300 from "@/assets/300.png";
import UPI200 from "@/assets/2001.png";
import UPI500 from "@/assets/5001.png";
import cross from "@/assets/cross.png";
import Image from "next/image";

export function PaymentForm({
    fee,
    transactionID,
    prices,
    updateFields
}) {
    const [screenshot, setScreenshot] = useState(null);

    let imageSrc;

    if (prices === 300) {
        imageSrc = UPI300;
    } else if (prices === 500) {
        imageSrc = UPI500;
    } else if (prices === 200) {
        imageSrc = UPI200;
    } else {
        imageSrc = cross;
    }

    const handleScreenshotChange = (e) => {
        const file = e.target.files[0];
        setScreenshot(file);
    };

    useEffect(() => {
        updateFields({ fee: prices })
    }, [])

    return (
        <FormWrapper title="Pay your registration fee here">
            <div className="flex flex-col justify-center items-center">
                <h2 className="bg-white text-gray-700 rounded-xl p-4 my-7 font-semibold text-1xl"> {/* Adjust font size here */}
                    <span className="text-2xl mb-4">For any queries contact:-</span><br /> {/* Adjust font size here */}
                    <h3 className="pl-4">
                        Suryansh Goyal - 7217720834<br />
                        Ayush Saini - 9354828233<br />
                        Haider Abdi - 9310336828<br />
                        Ayush Tyagi - 7011114293<br />
                    </h3>
                </h2>
                <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                    Price: ₹ {prices}
                </div>
                <div className="mt-4 flex flex-col justify-center items-center">
                    <Image src={imageSrc} alt="UPI QR CODE" width={500} />
                </div>
                <div className="mt-4 flex flex-col justify-center items-center">
                    {/* <label htmlFor="screenshotInput" className="block font-semibold">Upload Screenshot:</label>
                    <label htmlFor="screenshotInput" className="mt-1 bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg cursor-pointer">Choose File</label>
                    <input
                        type="file"
                        id="screenshotInput"
                        accept="image/*"
                        onChange={handleScreenshotChange}
                        className="hidden"
                    />
                    {screenshot ? (
                        <span>{screenshot.name}</span>
                    ) : (
                        <span>No file selected</span>
                    )} */}
                    <input type="text" placeholder='transaction id....' className='userFormInput' value={transactionID} onChange={(e) => updateFields({transactionID: e.target.value})}/>
                </div>
            </div>
        </FormWrapper>
    );
}
