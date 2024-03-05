// ./app/form/Form.tsx
"use client"; 
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import Particles from "../components/particles";

// Initialize Firebase (replace these with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyD2fVz3gVxTTxf6MdG47KFt-tCTY_QQpW4",
    authDomain: "opal-iedcsnmimt.firebaseapp.com",
    projectId: "opal-iedcsnmimt",
    storageBucket: "opal-iedcsnmimt.appspot.com",
    messagingSenderId: "195255081322",
    appId: "1:195255081322:web:fa2f968dd59f99bc462d13",
    measurementId: "G-KM022S7QMQ"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface FormData {
  fullName: string;
  age: number;
  phoneNumber: string;
  email: string;
  institution: string;
  studying: boolean;
  place: string;
  problemDescription: string;
  agreeConditions: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  age: 0,
  phoneNumber: "",
  email: "",
  institution: "",
  studying: false,
  place: "",
  problemDescription: "",
  agreeConditions: false,
};

const Form: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    };
  
    const handleStudyingChange = (studying: boolean) => {
      setFormData((prevData) => ({ ...prevData, studying }));
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        await addDoc(collection(db, "forms"), formData); // Specify the document path as "forms/emailid"
        console.log("Form data submitted successfully!");
        setFormData(initialFormData); // Reset form data after submission
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    };


  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Particles />
      <div className="container mx-auto flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-lg p-8 w-full md:w-2/3 lg:w-1/2 mt-[-60px]">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-400">Opel Form Tell about your problem</h2>
          
          <div className="mb-4">
            <input
              className="input-field w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-gray-300 text-sm font-bold">Are you student?</span>
              <div className="ml-2">
                <button
                  className={`px-4 py-2 rounded ${
                    formData.studying ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  onClick={() => handleStudyingChange(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    !formData.studying ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  onClick={() => handleStudyingChange(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <input
              className="input-field w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="age"
              placeholder="Age (e.g., 18)"
              value={formData.age === 0 ? '' : formData.age} // If age is zero, show empty string instead
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="input-field w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="phone"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="input-field w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email-ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="input-field w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="institution"
              placeholder="Institution"
              value={formData.institution}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="input-field w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="place"
              placeholder="Where are you located?"
              value={formData.place}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="input-field w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="problemDescription"
              placeholder="Tell me about your problem"
              value={formData.problemDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="agreeConditions"
              checked={formData.agreeConditions}
              onChange={handleCheckboxChange}
              className="mr-2 leading-tight"
              required
            />
            <label className="text-gray-300 text-sm font-bold">
              I agree to the conditions
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
