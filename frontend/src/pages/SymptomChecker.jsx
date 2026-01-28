import {use, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SymptomChecker(){
    const [symptoms,setSymptoms]=useState("");

    const [result,setResult]=useState(null);

    const navigate=useNavigate();

    const handleSubmit=async()=>{
        try{
            const response=await fetch(
            "http://localhost:5000/api/health/analyze",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
            
            body:JSON.stringify({
                symptoms:symptoms
            })
            }

            );
            const data=await response.json();

            setResult(data);
        }
        catch(error){
             console.error("Error analyzing symptoms", error);

        }
    };
    return(
        <div className="min-h-screen bg-grey-100 p-10">
            
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
            AI Symptom Checker

        </h1>

        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
            <label className="block text-gray-700 mb-2">
                          Describe your symptoms

            </label>

            <textarea value={symptoms} onChange={(e)=>setSymptoms(e.target.value)}
                placeholder="Example: fever, headache, cough"
                className="w-full h-28 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"/>
                <button onClick={handleSubmit}
                className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    Analyze Symptoms
                </button>
                {result&&(
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                        <p className="font-semibold text-purple-700">
                            Possible Condtion:
                        </p>
                        <p>{result.condtion}</p>

                        <p className="font-semibold text-purple-700 mt-2">
                        Risk Level:
                        </p>
                        <p>{result.risk}</p>
                        </div>
                )}

                <button onClick={()=>navigate("/patient")} className="mt-4 text-sm text-blue-600 underline">
                    ← Back to Dashboard

                </button>
        </div>
        </div>
    );
}