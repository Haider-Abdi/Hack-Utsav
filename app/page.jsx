"use client";

import React, { useEffect, useState } from "react"
import { useMultiForm } from "@/hooks/useMultiForm";
import { UserForm } from "@/components/UserForm";
import { EventForm } from "@/components/EventForm";
import { PaymentForm } from "@/components/PaymentForm";
import mrlogo from "@/assets/mrlogo.png";
import Image from "next/image";
import AimlLogo from "@/assets/AimlLogo.png"
import { Roboto_Slab } from "next/font/google"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";


const roboto = Roboto_Slab({ subsets: ["latin"] });

//data is set to this initially
const initalData = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  phone: "",
  option: "School",
  uniName: "",
  semester: "",
  rollNo: "",
  teamName: "",
  members: "",
  firstNameMem2: "",
  lastNameMem2: "",
  ageMem2: "",
  phoneMem2: "",
  semesterMem2: "",
  uniNameMem2: "",
  fee: "",
  timestamp: "",
  transactionID: "",
}

export default function Home() {

  const [data, setData] = useState(initalData)
  const [progress, setProgress] = useState(0);
  const [prices, setPrices] = useState(0);
  const [fromUni, setFromUni] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  //using our custom hook
  const { steps, currentStepIndex, step, FirstStep, back, next, LastStep, goTo } = useMultiForm([
    <UserForm {...data}
      updateFields={updateFields}
      fromUni={fromUni}
      setFromUni={setFromUni}
    />,

    <EventForm {...data}
      updateFields={updateFields}
      prices={prices}
      setPrices={setPrices}
      fromUni={fromUni}
      setFromUni={setFromUni}
    />,

    <PaymentForm {...data} prices={prices} updateFields={updateFields} />,
  ])

  //progress bar
  const getProgress = () => {
    switch (currentStepIndex + 1) {
      case 1:
        return "w-1/4";
      case 2:
        return "w-1/2";
      case 3:
        return "w-3/4";
    }
  }

  useEffect(() => {
    const currentProgress = getProgress();
    setProgress(currentProgress);
  }, [currentStepIndex])




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!LastStep) return next();
    setIsSubmitting(() => true);
    const currentTime = moment().format("DD-MM-YYYY HH:mm");
    data.timestamp = currentTime;
    console.log(data)

    fetch(`/api/send`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status === 201) {
        // console.log(response);
        toast.success("Submission Recorded!", {
          position: "top-right",
        })
        setData(() => initalData);
        goTo(0);
      } else {
        // console.log(response)
        throw Error()
      }
    }).catch((error) => {
      // console.log(error);
      toast.error("An error occured", {
        position: "top-right"
      })
    }).finally(() => setIsSubmitting(() => false));
    // .finally(() => setData(() => initalData));

  }

  return (
    <main>
      <div className={`fixed top-0 border-4 border-yellow-500 ${progress} transition-all duration-150`} />
      <div className="flex flex-col justify-center items-center">
      <div style={{ display: 'flex', gap: '20px' }}>
        <Image src={AimlLogo} alt="AIML LOGO" width={100} />
        <Image src={mrlogo} alt="MRIIRS Logo" width={300} />
      </div>
        {/* <Image src={mrlogo} alt="MRIIRS Logo" width={500} />
        <Image src={AimlLogo} alt="AIML LOGO" width={300} /> */}
        <div className="text-center my-5">
          <h1 className="font-bold text-4xl text-gray-700">Avarneeya - AIML Club brings </h1>
          <span className={roboto.className}>
            <h1 className="font-extrabold text-6xl bg-gradient-to-r from-red-700 to bg-yellow-500 bg-clip-text text-transparent outline-8 uppercase px-4 py-2">Hack-उत्सव 2024</h1>
          </span>
          <span className={roboto.className}>
            <h2 className="font-extrabold text-3xl bg-gradient-to-r from-red-700 to bg-yellow-500 bg-clip-text text-transparent outline-8 uppercase px-4 py-2">Unlock the secrets and Uncover the prize</h2>
          </span>
          <h1 className="font-bold text-4xl text-gray-700">12th April</h1>
        </div>
      </div>
      <div className="p-10 flex justify-center">
        <form className="p-10 flex flex-col items-center bg-gradient-to-tr from-blue-950 to-yellow-950 text-white  rounded-xl md:w-1/2" onSubmit={handleSubmit}>
          {step}
          <div className="p-3 rounded-xl">
            {!FirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
            <button type="button" className="navbutton" onClick={handleSubmit} disabled={isSubmitting}>
              {LastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  )
}