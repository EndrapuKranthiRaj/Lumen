import React, { useState } from 'react'
import axios from "axios";

//Input Page
export default function Lumen1() {
    
    //{ "feature1": 0.000, "feature2": 0.000, "feature3": 1.000, "feature4": 0.000, "feature5": 1.000, "feature6": 0.000, "feature7": 0.000, "feature8": 0.000, "feature9": 0.000, "feature10": 1.000, "feature11": 0.000, "feature12": 0.000, "feature13": 0.000, "feature14": 0.000, "feature15": 0.000, "feature16": 1.000, "feature17": 2.000, "feature18": 142.000, "feature19": 2505.000 }
    let funtest = { "0": 0.000, "1": 0.000, "2": 1.000, "3": 0.000,"4": 1.000, "5": 0.000, "6": 0.000, "7": 0.000, "8": 0.000, "9": 1.000, "10": 0.000, "11": 0.000, "12": 0.000, "13": 0.000, "14": 0.000, "15": 1.000, "16": 2.000, "17": 142.000, "18": 2505.000 }
    const [out, setOut] = useState({});
    const [pred,setPred] = useState(null)

    // axios.get(
    //     `http://127.0.0.1:5000/test`
    // )
    // .then((response) => {
    //     const res = response.data;
    //     console.log(res)
    // });

    function submitToApi(){
        console.log("I sent this: ",out)
        console.log(out)
        axios.post('http://127.0.0.1:5000/predict_api', out)
            .then(response => {
                const res = response.data;
                setPred(res)
                console.log(res)
            })
    }

    //Female,0,Yes,No,1,No,No,DSL,No,Yes,No,No,No,No,Monthly,Yes,Manual,29.85,29.85
    // F1 = feature1.....
    const [f1, setf1] = useState(); //male or female
    const [f2, setf2] = useState(); //0 or 1
    const [f3, setf3] = useState(); //yes or no
    const [f4, setf4] = useState(); //yes or no
    const [f5, setf5] = useState(); //0 or 1
    const [f6, setf6] = useState(); //yes or no
    const [f7, setf7] = useState(); //yes or no
    const [f8, setf8] = useState(); // DSl or Fiber optic
    const [f9, setf9] = useState(); //yes or no
    const [f10, setf10] = useState(); //yes or no
    const [f11, setf11] = useState(); //yes or no
    const [f12, setf12] = useState(); //yes or no
    const [f13, setf13] = useState(); //yes or no
    const [f14, setf14] = useState(); //yes or no
    const [f15, setf15] = useState(); //Monthly or yearly
    const [f16, setf16] = useState(); //Yes or no
    const [f17, setf17] = useState(); //manual or Bank transfer (automatic) or Credit card (automatic)
    const [f18, setf18] = useState(); //float
    const [f19, setf19] = useState(); //float
    const setlist = [setf1,setf2,setf3,setf4,setf5,setf6,setf7,setf8,setf9,setf10,
                    setf11,setf12,setf13,setf14,setf15,setf16,setf17,setf18,setf19]
    const list_ids = ['f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15','f16','f17','f18','f19']
      

    //Updating features
    function callMe() {   
        var ids_vals = []
        for(let i=0;i<list_ids.length;i++ ){
            ids_vals.push(document.getElementById(list_ids[i]).value)
            const ids_val = ids_vals[i]

            //Udating api sent data
                funtest[i.toString()]=ids_val;

            setlist[i](ids_vals[i])
        }
        console.log(ids_vals)
        console.log("Funtest:-",funtest)
        setOut(funtest)
    }

    return (

            <div className='flex flex-col justify-center items-center'>
            <div><span className='text-xl font-bold text-red-800 '>*</span><span className='font-bold '>Example Data:</span><span>[Female,0,Yes,No,1,No,No,DSL,No,Yes,No,No,No,No,Monthly,Yes,Manual,29.85,29.85]</span></div>
            <br/>
        
        < div className='m-10'>
        <div className='w-5/6 m-auto'>
            <div className='flex justify-center items-center border-4 border-black rounded-lg'>
                <form className="grid grid-cols-4 gap-4 m-4 w-1/2">
                    {/* looping to render all features from f1 to f12  */}
                    {list_ids.map((features) => (
                        <div key={features} className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Feature-{features}</label>
                        <input type="text" onChange={callMe} id={features} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

))}
                </form>
                <div className='h-[36em]  bg-orange-950 rounded-md text-orange-950'>
                    a
                </div>
                <div className="w-1/2 grid grid-cols-6 gap-10 m-4">
                    <span className='text-xl font-bold '>Feature1: </span><span className='font-semibold pt-1'>{f1}</span>
                    <span className='text-xl font-bold '>Feature2: </span><span className='font-semibold pt-1'>{f2}</span>
                    <span className='text-xl font-bold '>Feature3: </span><span className='font-semibold pt-1'>{f3}</span>
                    <span className='text-xl font-bold '>Feature4: </span><span className='font-semibold pt-1'>{f4}</span>
                    <span className='text-xl font-bold '>Feature5: </span><span className='font-semibold pt-1'>{f5}</span>
                    <span className='text-xl font-bold '>Feature6: </span><span className='font-semibold pt-1'>{f6}</span>
                    <span className='text-xl font-bold '>Feature7: </span><span className='font-semibold pt-1'>{f7}</span>
                    <span className='text-xl font-bold '>Featur8: </span><span className='font-semibold pt-1'>{f8}</span>
                    <span className='text-xl font-bold '>Feature9: </span><span className='font-semibold pt-1'>{f9}</span>
                    <span className='text-xl font-bold '>Feature10: </span><span className='font-semibold pt-1 ml-4'>{f10}</span>
                    <span className='text-xl font-bold '>Feature11: </span><span className='font-semibold pt-1 ml-4'>{f11}</span>
                    <span className='text-xl font-bold '>Feature12: </span><span className='font-semibold pt-1 ml-4'>{f12}</span>
                    <span className='text-xl font-bold '>Feature13: </span><span className='font-semibold pt-1 ml-4'>{f13}</span>
                    <span className='text-xl font-bold '>Feature14: </span><span className='font-semibold pt-1 ml-4'>{f14}</span>
                    <span className='text-xl font-bold '>Feature15: </span><span className='font-semibold pt-1 ml-4'>{f15}</span>
                    <span className='text-xl font-bold '>Feature16: </span><span className='font-semibold pt-1 ml-4'>{f16}</span>
                    <span className='text-xl font-bold '>Feature17: </span><span className='font-semibold pt-1 ml-4'>{f17}</span>
                    <span className='text-xl font-bold '>Feature18: </span><span className='font-semibold pt-1 ml-4'>{f18}</span>
                    <span className='text-xl font-bold '>Feature19: </span><span className='font-semibold pt-1 ml-4'>{f19}</span>
                </div>
            </div>
            <div className='flex justify-center items-center m-4'>
            <button className='p-2 rounded-md bg-green-700 font-semibold' onClick={submitToApi}>Submit</button>
            <p className='ml-4 font-bold text-xl'>{pred}</p> 
            </div>

        </div>
</div>
</div>
    )
}
