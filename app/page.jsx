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
  vertical1: [
    { eventName: "Theme Based Model Demo (Srijan)", members: null, price: 0 },
    { eventName: "Best out of Waste (Nav Shrijan)", members: null, price: 0 },
    { eventName: "Code Debugging", members: null, price: 0 },
    { eventName: "LAN Gaming", members: null, price: 0 },
    { eventName: "BioGenius", members: null, price: 0 },
    { eventName: "Vista Vibes- Video Blog", members: null, price: 0 },
    { eventName: "Technical Memes", members: null, price: 0 },
    { eventName: "Build a Circuit", members: null, price: 0 },
    { eventName: "Workshop on 3D Printing", members: null, price: 0 },
    { eventName: "Workshop on Laser Cutting and Design", members: null, price: 0 },
    { eventName: "EV Quiz Challenge", members: null, price: 0 },
  ],
  vertical2: [
    { eventName: "Pro Launch 2024", members: null, price: 0 },
    { eventName: "Ideattrakt", members: null, price: 0 },
    { eventName: "Poster Making", members: null, price: 0 },
    { eventName: "Finance Ki Pathshala", members: null, price: 0 },
  ],
  vertical3: [
    { eventName: "Workshop on Somatotyping", members: null, price: 0 },
    { eventName: "WellTech Innovate Challenge", members: null, price: 0 },
    { eventName: "Best out of food waste challenge", members: null, price: 0 },
    { eventName: "YuvaFlex Fusion Challenge", members: null, price: 0 },
    { eventName: "Pseudo Recipe Competition", members: null, price: 0 },
    { eventName: "Rescue Rangers Workshop", members: null, price: 0 },
  ],
  vertical4: [
    { eventName: "Sustainathon", members: null, price: 0 },
    { eventName: "Eco-reel", members: null, price: 0 },
    { eventName: "My community My Ad", members: null, price: 0 },
    { eventName: "Know your C-footprint", members: null, price: 0 },
  ],
  vertical5: [
    { eventName: "Workshop on Coffee: Journey of coffee 'Bean to cup' supported by Lavazza", members: null, price: 0 },
    { eventName: "Millet Cook off Challenge", members: null, price: 0 },
  ],
  vertical6: [
    { eventName: "Parliamentary Debate", members: null, price: 0 },
    { eventName: "Manifesto", members: null, price: 0 },
    { eventName: "Policy & Preamble Quiz", members: null, price: 0 },
    { eventName: "Reformative Policy Drafting", members: null, price: 0 },
  ],
  vertical7: [
    { eventName: "Techno- Vogue 'Technology Fashion Walk'", members: null, price: 0 },
    { eventName: "Spell Bee Competition 'Who will be the Spell Bee Champion'", members: null, price: 0 },
    { eventName: "Innovoice 'RJ Hunt'", members: null, price: 0 },
    { eventName: "SnapFlickShowdown: 'Reel Making Competition'", members: null, price: 0 },
  ],
  vertical8: [
    { eventName: "Shark tank 2.O (AWAKE THE ENTERPRENEUR WITHIN YOU)", members: null, price: 0 },
    { eventName: "PRAJAKIYA - The Rules of People 'Global Warming and Environment Conservation'", members: null, price: 0 },
    { eventName: "Move To The Groove 'Exploring the inner self through creative movement'", members: null, price: 0 },
    { eventName: "Screen Masters", members: null, price: 0 },
  ],
  prices: ""
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
  const { steps, currentStepIndex, step, FirstStep, back, next, LastStep } = useMultiForm([
    <UserForm {...data}
      updateFields={updateFields}
      prices={prices}
      setPrices={setPrices}
      fromUni={fromUni}
      setFromUni={setFromUni}
    />,

    // <EventForm {...data}
    //   updateFields={updateFields}
    //   prices={prices}
    //   setPrices={setPrices}
    //   fromUni={fromUni}
    //   setFromUni={setFromUni}
    // />,

    <PaymentForm prices={prices} />,
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