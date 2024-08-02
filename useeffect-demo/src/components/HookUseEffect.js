import { useState, useEffect } from "react";

const HookUseEffect = () => {
    const [count, setCount] = useState(0)
    const [myName, setMyName] = useState("")
  //? useEffect
  /*
        - Takes in a callback function
        - By default, runs on every render. (note: state updates cause a re-render).
        - Can be provided with an optional dependency array, to control when it executes.
        - Allow the use of side effects, actions which are to occur when something changes
        - Allows the cleanup of network requests, event listeners, timers...etc
        - Access to the main React lifecycle methods (Component => Mounted, Unmounted, Updated)


        ? Syntax:
            useEffect(() => {
                
                
            }, [])

            The second argument is optional []
                - If provided, the callback will execute on the initial mount of component
                - If dependencies are provided, will execute on initial mount and if ANY values of the deps change.

    */


    //? Do some type of action on initial mount of component
    // useEffect(() => {
    //     console.log("Showing on initial mount only");

      //? Do some type of action when component unmounts
    //     return () => console.log("Shown when component unmounts");
    // },[])

    //? Do some type of action when any state changes in the component
    // useEffect(() => {
    //     console.log("Component mounted, OR state was changed");
    // })

    //? Do some type of action based on something specific changing in the component
    // useEffect(() => {
    //     console.log("Component mounted OR count was changed");
    // }, [count])


    //! Example of setTimeout in useEffect
    //! Be caution of infinite loops
    // useEffect(() => {
    //     console.log("I am rendering");
        
    //     setCount(prev => prev+1)
    //     // setInterval(setCount(prev => prev+1), 1000)
    // })
    //! Dependencies should NOT be set within the useEffect
    // useEffect(() => {
    //     console.log("I am rendering");
        
    //     setCount(prev => prev+1)
    //     // setInterval(setCount(prev => prev+1), 1000)
    // },[count])

    // useEffect(() => {
    //     console.log("I am rendering");
    //     let interval = setInterval(() => setCount(prev => prev+1), 1000)
    //     return () => clearInterval(interval)
    // },[])

  return <div>

    <h3>{count}</h3>
    <button onClick={() => setCount(prev => prev+1)}>Increase</button>

    {/* <button onClick={() => setMyName("Amit")}>Change name</button> */}

    <UseEffectFetch />
  </div>;
};


const UseEffectFetch = () => {
    const [selectedOption, setSelectedOption] = useState("films")
    //? Container to store fetched results
    const [results, setResults] = useState([])
    //? Loading indicator
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        const fetchResults = async () => {
            setLoading(true)
            try{
                let results = await fetch(`https://ghibliapi.vercel.app/${selectedOption}`, {signal})

                let json = await results.json()

                console.log(json);
                setResults(json)
                setLoading(false)
                
            }catch(err){
                console.log(err);
            }
        }

        fetchResults()
        // Cancel network request when component unmounts
        return () => controller.abort()

    }, [selectedOption])


    const options = ["films", "people", "locations", "species", "vehicles"]

    const displayResults = () => {
        return results.map((obj) => {
            console.log(obj);
            return (
                <div style={{border: "1px solid blue"}}>
                    <img src={obj.image} />
                    <h4>{obj.name}</h4>
                    <h4>{obj.title}</h4>
                    <p>{obj.description}</p>
                </div>
            )
        })
    }


    return (
        <>
        <h2>Studio Ghibli</h2>
        <h3>{selectedOption}</h3>
        
        <select onChange={(e) => setSelectedOption(e.target.value) }>
            {options.map((string) => {
                return <option key={string}>{string}</option>
            })}
        </select>

        {loading ? <h3>Loading...</h3> : displayResults() }
        
        </>
    )
}

export default HookUseEffect;
