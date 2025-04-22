import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { useFetch } from '../api/fetching';


export function GanderChart() {
    const { data } = useFetch("/students");

    const genderCount = (type)=>{
        if (!data || data.length === 0) {
            return 0; 
        }
        const Count = data.filter((student) =>student.gander === type).length;
        return  (Count / data.length ) * 100
    }

    const StudentsData = [
        {
            name: 'Total',
            percentage: 100,
            fill: 'white',
        },
        {
            name: 'Girls',
            percentage: genderCount("female"),
            fill: '#D8CAF1',
        },
        {
            name: 'Boys',
            percentage: genderCount("male"),
            fill: '#C8E6F1',
        },

    ];

    return (

        <div className="bg-white w-full h-96 md:w-96 rounded-lg p-2 ">
            <h1 className=" text-xl">Students</h1>
            <div className='relative  w-full h-[68%]'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={StudentsData}>
                        <RadialBar
                            background
                            dataKey="percentage"
                        />
                    </RadialBarChart>

                </ResponsiveContainer>
                <img src="./maleFemale.png" className='absolute w-12 left-[50%] top-[50%] -translate-[50%]     ' />

            </div>
            <div className=" flex items-center justify-evenly">
                <div className=" w-fit flex flex-col items-center justify-center ">
                    <div className='bg-sky w-5 h-5 rounded-full' />
                    <h1 className=' font-bold'>{genderCount("male")/10}</h1>
                    <h2 className='text-sm text-gray-300  '>Boys({genderCount("male")}%)</h2>
                </div>
                <div className=" w-fit flex flex-col items-center justify-center ">
                    <div className='bg-purpl w-5 h-5 rounded-full' />
                    <h1 className=' font-bold'>{genderCount("female")/10}</h1>
                    <h2 className='text-sm text-gray-300  '>Girls({genderCount("female")}%)</h2>
                </div>
            </div>

        </div>
    );
}


