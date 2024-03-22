"use client";

import FormWrapper from "./FormWrapper";
import UPI from "@/assets/UPI.png"
import Image from "next/image";

export function PaymentForm({ prices }) {
    return (
        <FormWrapper title="Pay your registration fee here">
            <div className="">
                <h3 className="bg-white text-gray-700 rounded-xl p-4 my-7 font-semibold">
                    Bank Name: IndusInd Bank<br />
                    Account Name:  MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES GST<br />
                    Account No:  201004119068<br />
                    IFSC Code:  INDB0000702
                </h3>
                <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                    Price:₹ {prices}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={UPI} alt="UPI QR CODE" width={500} />
                </div>
            </div>

        </FormWrapper>

    )
}