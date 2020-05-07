import React, {useState} from 'react';
import './App.css';
import {Basic} from "./components/Basic";
import {Experience} from "./components/Experience";
import {Response} from "./components/Response";

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
    else if(curStep===3){
        return <Response nextStep={nextStep} prevStep={prevStep}/>
    }
    else if (curStep==4){
        return <h1 className="center mt6">Response Successfully Recorded</h1>
    }
}
