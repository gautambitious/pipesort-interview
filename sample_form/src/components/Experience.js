import React, {useState} from "react";

export const Experience = ({nextStep, prevStep}) => {
    const [resume, setResume] = useState("");
    return (
        <main className="pa4 black-80 shadow-1 mt3">
            <h1 className="measure center ph5">Experience</h1>
            <form className="mt3" id="basic-form">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Link to Resume</label>
                        <input  className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" id="resumelink" onChange={(event) => setResume(event.target.value)} type="url" placeholder="" />
                    </div>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Last Name</label>
                        <textarea className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" type="text" id="lastname" placeholder="Scott"/>
                    </div>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Email</label>
                        <textarea className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" type="email" id="email" placeholder="michael@dundermifflin.com"/>
                    </div>
                </fieldset>
                <div>
                    <input value="Save" type="submit" onClick={prevStep} className="grow pointer b--solid b--black-20 bg-white black pa2 b"/>
                </div>
            </form>
        </main>
    );
}