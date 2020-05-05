import React, {useState} from "react";

export const Experience = ({nextStep, prevStep}) => {
    return (
        <main className="pa4 black-80">
            <h1 className="measure center">Internship Application</h1>
            <form className="mt3" id="basic-form">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">First Name</label>
                        <input onChange={(event) => setFirstName(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue hover-white w-100" id="resumelink" type="text" placeholder="Michael"/>
                    </div>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Last Name</label>
                        <input onChange={(event) => setLastName(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue hover-white w-100" type="text" id="lastname" placeholder="Scott"/>
                    </div>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Email</label>
                        <input onChange={(event) => setEmail(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue hover-white w-100" type="email" id="email" placeholder="michael@dundermifflin.com"/>
                    </div>
                </fieldset>
                <input value="Save" type="submit" onClick={basicSubmit} className="grow pointer b--solid b--black-20 bg-white black pa2 b"/>
            </form>
        </main>
    );
}