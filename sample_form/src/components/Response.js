import React, {useState} from "react";

export const Response = ({nextStep, prevStep}) => {
    const [inter, setInter] = useState("")
    const [avail, setAvail] = useState("")
    const saveResponse = (event) => {
        event.preventDefault();
        const respData = {
            inter: inter,
            avail: avail
        };
        console.log(respData);
        nextStep();
    }
    return (
        <main className="pa4 black-80 shadow-1 mt3">
            <h1 className="measure center ph5">Experience</h1>
            <form className="mt3" id="basic-form">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Why should you be hired for this job?</label>
                        <textarea onChange={(event => setInter(event.target.value))} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" id="interview" type="url" placeholder="" />
                    </div>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Are you available for this job?</label>
                        <textarea onChange={(event => setAvail(event.target.value))} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" type="text" id="avail"/>
                    </div>
                </fieldset>
                <div>
                    <input value="Back" type="submit" onClick={prevStep} className="grow pointer b--solid b--black-20 bg-white black pa2 b mr3"/>
                    <input value="Save" onClick={saveResponse} type="submit" className="grow pointer b--solid b--black-20 bg-white black pa2 b"/>
                </div>
            </form>
        </main>
    );
}