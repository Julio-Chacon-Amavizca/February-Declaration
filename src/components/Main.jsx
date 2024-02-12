import { useChangeElements } from '../hooks/changeElements'

export function Main () {

    const { handleButtonNo, handleButtonYes, textP, image } = useChangeElements()

    return (
        <>
            <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>

                <div className='flex justify-center items-center flex-col gap-2'>

                    <h1 className='font-sans font-bold text-fuchsia-800 text-5xl'> 
                    Quieres Ser Mi San Valentin Joss? ❤ </h1>

                    <img src={image} className='w-72'/>

                    <p className='font-sans text-indigo-600 text-5xl'> {textP} </p>

                    <section className='flex gap-3'>

                        <button className='bg-blue-600 w-28 text-white font-bold py-8 px-4 rounded transition-all hover:scale-110' onClick={handleButtonYes}> Si </button>

                        <button className='bg-red-700 w-28 text-white font-bold py-6 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNo}> No </button>
                    </section>

                </div>

            </main>
        </>
    )
}