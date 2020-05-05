import React, {useState} from 'react';
import './App.css';
import {Basic} from "./components/Basic";
import {Experience} from "./components/Experience";

export const App = () => {
    const [curStep, setCurStep] = useState(1)
    const nextStep = () => setCurStep(curStep+1)
    const prevStep = () => setCurStep(curStep-1)
    if(curStep===1){
        return <Basic nextPage={nextStep}/>
    }
    else if(curStep===2){
        return <Experience nextStep={nextStep} prevStep={prevStep}/>
    }
}
